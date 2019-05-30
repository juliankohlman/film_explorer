import axios from 'axios';
import { API } from '.';
import { posterImageCheck } from '../helpers';

/**
 *
 * @param {*} _
 * @param {*} args page property representing page of result being viewed
 * @returns a resolved promise (an array of films based on the nowPlaying query)
 */

export const nowPlaying = async (_, { page, jumpTo }) => {
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
