import axios from 'axios';
import { API } from '.';
import { posterImageCheck } from '../helpers';

/**
 *
 * @param {*} _
 * @param {*} args genreID and page number of genre results
 * @returns a resolved promise (array of film objects)
 */

export const genreFilms = async (_, { genreID = 16, page = 1 }) => {
	try {
		// const res = await axios.get(
		// 	`https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreID}`
		// );
		const res = await axios.post(
			`https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreID}`
		);

		const films = res.data.results;
		films.map(film => {
			film.poster_path = posterImageCheck(film.poster_path, film);
			film.total_results = res.data.total_results;
			film.total_pages = res.data.total_pages;
		});

		return films || [];
	} catch (error) {
		console.log(error);
	}
};
