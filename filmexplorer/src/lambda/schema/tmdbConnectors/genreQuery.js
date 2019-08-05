import axios from 'axios';
import { API } from '.';
import { posterImageCheck } from '../helpers';

/**
 *
 * @param {*} _
 * @param {*} input set of inputs used to construct query
 * @returns a resolved promise (an array of genre films based on query inputs)
 */

export const genreQuery = async (_, { input, page }) => {
	let queryPropValues = [
		`&sort_by=${input.sort_by}`,
		`&certification_country=${input.certification_country}`,
		`&certification=${input.certification}`,
		`&include_adult=${input.include_adult}`,
		`&include_video=${input.include_video}`,
		`&page=${page}`,
		// `&page=${input.page}`,
		`&primary_release_year=${input.primary_release_year}`,
		`&primary_release_date.gte=${input.primary_release_date_gte}`,
		`&primary_release_date.lte=${input.primary_release_date_lte}`,
		`&with_genres=${input.genreID}`,
		`&with_people=${input.with_people}`,
		`&year=${input.year}`,
		`&with_runtime.gte=${input.with_runtime_gte}`,
		`&with_runtime.lte=${input.with_runtime_lte}`
	];

	let query = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US`;

	// Todo: fetch /search/person => id, which the becomes with_people value
	//* Check on queryPropValues[with_people] field. If user entered a string THEN
	//* run the getPerson query and set with_people field equal to first id of results array
	//* then proceed with rest of genreQuery

	if (input.personString) {
		try {
			//! change page back to input.page line #44
			let res = await axios.get(
				`https://api.themoviedb.org/3/search/person?api_key=${API}&language=en-US&query=${
					input.personString
				}&page=${page}&include_adult=false`
			);
			queryPropValues[10] = `&with_people=${res.data.results[0].id}`;
		} catch (error) {
			console.log(error);
		}
	}

	/* Checking for certifications existence to trigger setting of cert_country to US. per the tmdb api, these two params work in tandem so we need to check for a certification param then backtrack to set the country to the
US for accurate filtering
*/
	if (queryPropValues[2]) queryPropValues[1] = `&certification_country=US`;

	queryPropValues.forEach((arg, idx) => {
		if (!arg.includes('undefined')) query += queryPropValues[idx];
	});
	// console.log('dynamic query string', query);
	// console.log('actor or director', input.personString);
	try {
		const res = await axios.get(query);

		const genreFilms = res.data.results;
		genreFilms.map(film => {
			film.poster_path = posterImageCheck(film.poster_path, film);
			film.total_results = res.data.total_results;
			film.total_pages = res.data.total_pages;
			film.overview;
		});
		return genreFilms;
	} catch (error) {
		console.error(error);
	}
};
