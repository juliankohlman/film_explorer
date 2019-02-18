import axios from 'axios';

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
	}
};
