import axios from 'axios';
// Access to environment variables
import dotenv from 'dotenv';
dotenv.config();
const { API } = process.env;
import { posterImageCheck } from '../helpers';

//Todo what will you render if the search returns no movies???
export const getFilm = async (_, { queryString, page }) => {
	try {
		const res = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${queryString}&page=${page}&include_adult=false`
		);

		const filmSearchResults = res.data.results;

		filmSearchResults.map(film => {
			film.poster_path = posterImageCheck(film.poster_path, film);
			film.overview;
			film.total_results = res.data.total_results;
			film.total_pages = res.data.total_pages;
		});

		console.log('# of pages:', res.data.total_pages);
		console.log('# of filmSearchResults:', res.data.total_results);
		return filmSearchResults;
	} catch (error) {
		console.log(error);
	}
};
