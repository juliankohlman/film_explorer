import axios from 'axios';
// ! TODO USE the api-connector pattern (axios functions separated from resolver functions)
/**
 * Building dynamic requests
 * base request
 * Query string options get added based on order on api page SEE => https://developers.themoviedb.org/3/discover/movie-discover
 * https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API}&language=en-US&include_adult=false&include_video=false&page=1
 * Potential modifiers
 * &with_genres=string...but maps to ints like 28
 * &primary_release_year=integer
 * &sort_by=(popularity|release_date|revenue|title) <= this goes directly after US in base req string
 * All base req modifiers should be added as args to the resolver for genres selections
 * On the front-end a 'next' button will increment the page by 1 and run the query again
 * Should map all sorting options to user selections
 * Future feature: query by actor/director/studio...etc
 */
export const resolvers = {
	Query: {
		getNowPlaying: () =>
			axios
				.get(
					`https://api.themoviedb.org/3/movie/now_playing?api_key=${
						process.env.API
					}&language=en-US&page=1`
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
				.catch(err => console.error(err)),
		getGenre: (_, { genreID }) => {
			return axios
				.get(
					`https://api.themoviedb.org/3/discover/movie?api_key=${
						process.env.API
					}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`
				)
				.then(res => {
					const genreFilms = res.data.results;
					genreFilms.map(film => {
						film.poster_path = `https://image.tmdb.org/t/p/w500${
							film.poster_path
						}`;
						film.overview;
					});
					return genreFilms;
				})
				.catch(e => res.json('error', e));
		}
	}
};
