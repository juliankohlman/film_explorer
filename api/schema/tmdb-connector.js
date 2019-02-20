/**
 * TMDB axios connector functions (data-fetching)
 */
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const { API } = process.env;

/**
 * nowPlaying
 * returns films now playing in theaters
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

// ! use append_to_response for videos and images etc...counts as only 1 request
export const filmDetails = (_, { filmID }) =>
	axios
		.get(
			`https://api.themoviedb.org/3/movie/${filmID}?api_key=${API}&language=en-US&append_to_response=credits,videos,similar,recommendations`
		)
		.then(res => {
			const film = res.data;
			console.log(film.credits);
			return film;
		})
		.catch(e => res.json('error', e));
