import axios from 'axios';
import { API } from '.';
import { posterImageCheck } from '../helpers';
/**
 * nowPlaying: returns a list of films now playing in theaters
 */

export const nowPlaying = async (_, { page }) => {
	try {
		const res = await axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}&language=en-US&page=${page}`
		);
		const movies = res.data.results;

		movies.map(movie => {
			movie.poster_path = posterImageCheck(movie.poster_path, movie);

			movie.total_results = res.data.total_results;
			movie.total_pages = res.data.total_pages;
		});

		return movies;
	} catch (error) {
		console.log(error);
	}
};
