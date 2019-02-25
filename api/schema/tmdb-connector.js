/**
 * TMDB axios connector functions (data-fetching)
 */
import axios from 'axios';
// Access to environment variables
import dotenv from 'dotenv';
dotenv.config();
const { API } = process.env;

/**
 * nowPlaying: returns a list of films now playing in theaters
 */

export const nowPlaying = (_, { page }) =>
	axios
		.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}&language=en-US&page=${page}`
		)
		.then(res => {
			//! Add pagination functionality to typeDef
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
			// additional fields: credits, videos, similar, recommendations

			return film;
		})
		.catch(e => res.json('error', e));

/**
 * genreExplore
 */

export const genreQuery = (
	_,
	{
		genreID,
		page,
		sort_by,
		certification_country,
		certification,
		primary_release_date_gte,
		primary_release_date_lte,
		year,
		with_runtime_gte,
		with_runtime_lte
	}
) => {
	//TODO Add logic to dynamically build query string based on arguments
	// [https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US]
	// [&sort_by section]
	// [&certification ]
	//! [&include_adult=false]
	//! [&include_video=false]
	// [&page]
	// [&primary_release_date.gte] year-month-day (after)
	// [&primary_release_date.lte] year-month-day (before)
	// [&year]
	// [&with_runtime.gte]
	// [&with_runtime.lte]
	// ? iterate over query sections
	// ? IF a query arg exists...!== undefined
	// * then insert that section into query string
	// * IF query arg is empty move onto the next
	//  HARD CODE GENRE FROM client-side label somehow
	console.log(sort_by);

	return axios
		.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&include_adult=false&include_video=false&page=${page}&with_genres=${genreID}`
		)
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
// sort by options
// [popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc]

// [sort_by, cert_country, cert, page, primary_release_date.gte, primary_release_date.lte, year, with_runtime.gte, with_runtime.lte]
