/**
 * TMDB axios connector functions (data-fetching)
 */
import axios from 'axios';
// Access to environment variables
import dotenv from 'dotenv';
// import { queryPropValues } from './utils';
dotenv.config();
const { API } = process.env;

//TODO add open search bar on landing page using the 'multi search query' https://developers.themoviedb.org/3/search/multi-search
//* add logic to tweak shape of data based on the potential returned data.
//Todo use async functions?? What are the benefits and drawbacks?
//* https://medium.com/@adityasingh_32512/how-to-use-async-await-with-axios-in-react-e07daac2905f
//* https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
/*
The purpose of async/await functions is to simplify the behavior of using promises synchronously and to perform some behavior on a group of Promises. Just as Promises are similar to structured callbacks, async/await is similar to combining generators and promises.
*/
/**
 *
 * @param {*} _
 * @param {*} param1
 * getPerson will be called under the explore genre function
 * to allow users to filter genre results by an actor or directors name
 */
// export const actorDirector = (_, { queryString }) => {
// 	axios
// 		.get(
// 			`https://api.themoviedb.org/3/search/person?api_key=${API}&language=en-US&query=${queryString}&page=1&include_adult=false`
// 		)
// 		.then(res => {
// 			return res.data.results;
// 		});
// };

/**
 * nowPlaying: returns a list of films now playing in theaters
 */
/* Promise based version of nowPlaying
export const nowPlaying = (_, { page }) =>
	axios
		.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}&language=en-US&page=${page}`
		)
		.then(res => {
			console.log('# of pages:', res.data.total_pages);
			console.log('# of movies:', res.data.total_results);

			const movies = res.data.results;
			movies.map(movie => {
				movie.poster_path = `https://image.tmdb.org/t/p/w500${
					movie.poster_path
				}`;
				movie.overview;
			});

			return movies;
		})
		.catch(err => console.error(err));
*/

export const nowPlaying = async (_, { page }) => {
	try {
		let res = await axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}&language=en-US&page=${page}`
		);
		const movies = res.data.results;
		movies.map(movie => {
			movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
			movie.overview;
		});
		console.log('# of pages:', res.data.total_pages);
		console.log('# of movies:', res.data.total_results);
		return movies;
	} catch (error) {
		console.log(error);
	}
};

export const genreFilms = async (_, { genreID, page }) => {
	try {
		let res = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreID}`
		);
		console.log(`Now viewing page ${page} of ${res.data.total_pages}`);
		console.log('# of pages:', res.data.total_pages);
		console.log('# of movies:', res.data.total_results);

		const films = res.data.results;
		films.map(film => {
			film.poster_path = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
			film.overview;
		});
		return films;
	} catch (error) {
		console.log(error);
	}
};

/**
 * filmDetails: returns a data specific to film with given ID
 * @param {*} _ root param ignored
 * @param {*} param1 filmID
 */

export const filmDetails = async (_, { filmID }) => {
	try {
		let res = await axios.get(
			`https://api.themoviedb.org/3/movie/${filmID}?api_key=${API}&language=en-US&append_to_response=credits,videos,similar,recommendations`
		);
		const film = res.data;
		//Todo format response with well-shaped data including the fields: credits, videos, similar, recommendations
		//Todo write simple function to format runtime (mins) => hrs = mins/60 mins = mins % 60 return hrs and mins (Check for <= 60minute runtimes)
		//* Film credits grab top billed cast, and from crew grab: casting director, music composer, costume designer, associate producers, editors, production designer, director of photography, executive producer, writers, director
		let cast = film.credits.cast;
		let crew = film.credits.crew;
		console.log(cast[0]);
		console.log(crew[0]);

		// [ cast: {8 props}, crew: {7 props}]
		// console.log(film.videos);
		// console.log(film.similar);
		// console.log(film.recommendations);

		return film;
	} catch (error) {
		console.log(error);
	}
};

/**
 * genreExplore
 */
//Todo refactor code to import queryArg and prop arrays from a util file
//Todo add withPeople field, and make that subquery to https://api.themoviedb.org/3/search/person?api_key=${apikey}&language=en-US&query=Ryan%20Reynolds&page=1&include_adult=false
//* THEN attach results arrays first object id property
export const genreQuery = (_, { input }) => {
	//* refactor query arrays into single object or import from external file
	//todo add enum type to replace explore genre arguments
	/* enum LinkOrderByInput {
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
}
*/
	// let queryArguments = [
	// 	sort_by,
	// 	certification_country,
	// 	certification,
	// 	include_adult,
	// 	include_video,
	// 	page,
	// 	primary_release_year,
	// 	primary_release_date_gte,
	// 	primary_release_date_lte,
	// 	genreID,
	// 	year,
	// 	with_runtime_gte,
	// 	with_runtime_lte
	// ];

	let queryPropValues = [
		`&sort_by=${input.sort_by}`,
		`&certification_country=${input.certification_country}`,
		`&certification=${input.certification}`,
		`&include_adult=${input.include_adult}`,
		`&include_video=${input.include_video}`,
		`&page=${input.page}`,
		`&primary_release_year=${input.primary_release_year}`,
		`&primary_release_date.gte=${input.primary_release_date_gte}`,
		`&primary_release_date.lte=${input.primary_release_date_lte}`,
		`&with_genres=${input.genreID}`,
		`&year=${input.year}`,
		`&with_runtime.gte=${input.with_runtime_gte}`,
		`&with_runtime.lte=${input.with_runtime_lte}`
	];

	let query = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US`;
	//* Checking for certifications existence to trigger setting of cert_country to US. per the tmdb api, these two
	//* params work in tandem so we need to check for a certification param then backtrack to set the country to the
	//* US for accurate filtering
	if (queryPropValues[2]) {
		// now certification_country is no longer === undefined inside our loop
		// queryPropValues[1] = 'US';
		// replace cert_country value with needed string
		queryPropValues[1] = `&certification_country=US`;
	}
	// console.log('certification country', queryArguments[1]);

	queryPropValues.forEach((arg, idx) => {
		console.log(input.arg);
		console.log(arg.includes('undefined'));
		// arg.includes('undefined') ? (query += queryPropValues[idx]) : null;
		if (!arg.includes('undefined')) query += queryPropValues[idx];
	});

	// input.arg ? (query += queryPropValues[idx]) : null

	console.log('dynamic query string', query);

	return axios

		.get(query)
		.then(res => {
			console.log('# of pages:', res.data.total_pages);
			console.log('# of movies:', res.data.total_results);

			const genreFilms = res.data.results;
			genreFilms.map(film => {
				film.poster_path = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
				film.overview;
			});
			return genreFilms;
		})
		.catch(e => res.json('error', e));
};
