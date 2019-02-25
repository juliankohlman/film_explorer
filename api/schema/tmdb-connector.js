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

export const genreFilms = (_, { genreID }) =>
	axios
		.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`
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
