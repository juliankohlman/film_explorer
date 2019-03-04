/**
 * TMDB axios connector functions (data-fetching)
 */
import axios from 'axios';
// Access to environment variables
import dotenv from 'dotenv';
dotenv.config();
const { API } = process.env;

//TODO add open search bar on landing page using the 'multi search query' https://developers.themoviedb.org/3/search/multi-search
//* add logic to tweak shape of data based on the potential returned data.
//Todo use async functions?? What are the benefits and drawbacks?
/**
 *
 * @param {*} _
 * @param {*} param1
 * getPerson will be called under the explore genre function
 * to allow users to filter genre results by an actor or directors name
 */
export const getPerson = (_, { queryString }) => {
	axios
		.get(
			`https://api.themoviedb.org/3/search/person?api_key=${API}&language=en-US&query=${queryString}&page=1&include_adult=false`
		)
		.then(res => {
			const person = res.data.results[0];
			console.log(person);

			return person.id;
		});
};
/**
 * nowPlaying: returns a list of films now playing in theaters
 */

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

/**
 * genreFilms: accepts genre ID and return list of films by genre
 * @param {*} _ root param ignored
 * @param {*} param1 genreID
 */

export const genreFilms = (_, { genreID, page }) =>
	axios
		.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreID}`
		)
		.then(res => {
			// tie basic idea below to pagination and informative display info to user...now viewing <genre> page # blank of pages etc...
			console.log(`Now viewing page ${page} of ${res.data.total_pages}`);
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

/**
 * filmDetails: returns a data specific to film with given ID
 * @param {*} _ root param ignored
 * @param {*} param1 filmID
 */

export const filmDetails = (_, { filmID }) =>
	axios
		.get(
			`https://api.themoviedb.org/3/movie/${filmID}?api_key=${API}&language=en-US&append_to_response=credits,videos,similar,recommendations`
		)
		.then(res => {
			const film = res.data;
			//Todo format response with well-shaped data including the fields: credits, videos, similar, recommendations
			//Todo write simple function to format runtime (mins) => hrs = mins/60 mins = mins % 60 return hrs and mins (Check for <= 60minute runtimes)
			//* Film credits grab top billed cast, and from crew grab: casting director, music composer, costume designer, associate producers, editors, production designer, director of photography, executive producer, writers, director
			// console.log(film.credits); [ cast: {8 props}, crew: {7 props}]
			// console.log(film.videos);
			// console.log(film.similar);
			// console.log(film.recommendations);

			return film;
		})
		.catch(e => res.json('error', e));

/**
 * genreExplore
 */
//Todo refactor code to import queryArg and prop arrays from a util file
//Todo add withPeople field, and make that subquery to https://api.themoviedb.org/3/search/person?api_key=${apikey}&language=en-US&query=Ryan%20Reynolds&page=1&include_adult=false
//* THEN attach results arrays first object id property
export const genreQuery = (
	_,
	{
		sort_by,
		certification_country,
		certification,
		include_adult,
		include_video,
		page,
		primary_release_year,
		primary_release_date_gte,
		primary_release_date_lte,
		genreID,
		year,
		with_runtime_gte,
		with_runtime_lte
	}
) => {
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
	let queryArguments = [
		sort_by,
		certification_country,
		certification,
		include_adult,
		include_video,
		page,
		primary_release_year,
		primary_release_date_gte,
		primary_release_date_lte,
		genreID,
		year,
		with_runtime_gte,
		with_runtime_lte
	];

	let queryPropValues = [
		`&sort_by=${sort_by}`,
		`&certification_country=${certification_country}`,
		`&certification=${certification}`,
		`&include_adult=${include_adult}`,
		`&include_video=${include_video}`,
		`&page=${page}`,
		`&primary_release_year=${primary_release_year}`,
		`&primary_release_date.gte=${primary_release_date_gte}`,
		`&primary_release_date.lte=${primary_release_date_lte}`,
		`&with_genres=${genreID}`,
		`&year=${year}`,
		`&with_runtime.gte=${with_runtime_gte}`,
		`&with_runtime.lte=${with_runtime_lte}`
	];

	let query = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US`;
	//* Checking for certifications existence to trigger setting of cert_country to US. per the tmdb api, these two
	//* params work in tandem so we need to check for a certification param then backtrack to set the country to the
	//* US for accurate filtering
	if (queryArguments[2]) {
		// now certification_country is no longer === undefined inside our loop
		queryArguments[1] = 'US';
		// replace cert_country value with needed string
		queryPropValues[1] = `&certification_country=US`;
	}
	console.log('certification country', queryArguments[1]);

	queryArguments.forEach((arg, idx) =>
		arg !== undefined ? (query += queryPropValues[idx]) : null
	);
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
