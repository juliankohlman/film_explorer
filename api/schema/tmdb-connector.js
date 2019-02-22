/**
 * TMDB axios connector functions (data-fetching)
 */
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const { API } = process.env;

/**
 * nowPlaying: returns a list of films now playing in theaters
 */

export const nowPlaying = () =>
	axios
		.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}&language=en-US&page=1`
		)
		.then(res => {
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
			console.log(film.similar);
			//! Todo format data for certain fields for easier usage on frontend
			//! Todo consult tmdb api for fields that are labeled 'string/integer or null' and make those fields nullable. Then decide what to render on frontend in cases where data fields are null...like a poster_path for example
			return film;
		})
		.catch(e => res.json('error', e));
