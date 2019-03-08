/**
 * TMDB axios connector functions (data-fetching)
 */
import axios from 'axios';
// Access to environment variables
import dotenv from 'dotenv';
dotenv.config();
const { API } = process.env;

//TODO add open search bar on landing page using the 'multi search query' https://developers.themoviedb.org/3/search/multi-search

/**
 *
 * @param {*} _
 * @param {*} param1
 * getPerson will be called under the explore genre function
 * to allow users to filter genre results by an actor or directors name
 */
export const getPerson = async (_, { queryString, page }) => {
	try {
		let res = await axios.get(
			`https://api.themoviedb.org/3/search/person?api_key=${API}&language=en-US&query=${queryString}&page=${page}&include_adult=false`
		);
		const searchResults = res.data.results;
		//Todo map over results and pull out [name, popularity, id] from results
		//Todo need to handle the 'known for' property
		// console.log('Top result:', searchResults[0].name, searchResults[0].id);
		return searchResults;
	} catch (error) {
		console.log(error);
	}
};

export const getFilm = async (_, { queryString, page }) => {
	try {
		let res = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${queryString}&page=${page}&include_adult=false`
		);

		const filmSearchResults = res.data.results;
		filmSearchResults.map(film => {
			film.poster_path = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
			film.overview;
		});
		// console.log('# of pages:', res.data.total_pages);
		// console.log('# of filmSearchResults:', res.data.total_results);
		return filmSearchResults;
	} catch (error) {
		console.log(error);
	}
};

/**
 * nowPlaying: returns a list of films now playing in theaters
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
		// console.log('# of pages:', res.data.total_pages);
		// console.log('# of movies:', res.data.total_results);
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
		// console.log(`Now viewing page ${page} of ${res.data.total_pages}`);
		// console.log('# of pages:', res.data.total_pages);
		// console.log('# of movies:', res.data.total_results);

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
		// console.log(cast[0]);
		// console.log(crew[0]);
		// console.log(film.videos);
		// console.log(film.similar);
		// console.log(film.recommendations);
		// console.log(film);

		return film;
	} catch (error) {
		console.log(error);
	}
};

/**
 * genreExplore
 */
//Todo add withPeople field, and make that subquery to https://api.themoviedb.org/3/search/person?api_key=${apikey}&language=en-US&query=Ryan%20Reynolds&page=1&include_adult=false
//* THEN attach results arrays first object id property
/* Checking for certifications existence to trigger setting of cert_country to US. per the tmdb api, these two params work in tandem so we need to check for a certification param then backtrack to set the country to the
US for accurate filtering
*/
export const genreQuery = async (_, { input }) => {
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
	console.log('actor or director name', input.personString);

	if (input.personString) {
		try {
			let res = await axios.get(
				`https://api.themoviedb.org/3/search/person?api_key=${API}&language=en-US&query=${
					input.personString
				}&page=${input.page}&include_adult=false`
			);
			queryPropValues[10] = `&with_people=${res.data.results[0].id}`;
			// input.with_people = res.data.results[0].id;
		} catch (error) {
			console.log(error);
		}
	}

	if (queryPropValues[2]) queryPropValues[1] = `&certification_country=US`;

	queryPropValues.forEach((arg, idx) => {
		if (!arg.includes('undefined')) query += queryPropValues[idx];
	});
	console.log('dynamic query string', query);
	console.log('actor or director', input.personString);
	try {
		let res = await axios.get(query);
		// console.log('# of pages:', res.data.total_pages);
		// console.log('# of movies:', res.data.total_results);

		const genreFilms = res.data.results;
		genreFilms.map(film => {
			film.poster_path = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
			film.overview;
		});
		return genreFilms;
	} catch (error) {
		console.log(error);
	}
};
