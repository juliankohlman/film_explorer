import { queryType } from 'nexus/dist';
import axios from 'axios';
import { defaultFieldResolver } from 'graphql';

export const NowPlaying = queryType({
	name: 'NowPlaying',
	description: 'Movies now playing in theaters',
	definition(t) {
		t.int('id');
		t.string('poster_path');
		t.string('title');
		t.string('overview');
		defaultFieldResolver: axios
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
				console.log(movies[0]);
				return movies;
			})
			.catch(err => {
				console.log(err);
			});
	}
	// ! Research how nexus handles resolvers in your schema
	// t.resolveType(() =>
	//   axios
	//     .get(
	//       `https://api.themoviedb.org/3/movie/now_playing?api_key=${
	//       process.env.API
	//       }&language=en-US&page=1`
	//     )
	//     .then(res => {
	//       const movies = res.data.results;
	//       movies.map(movie => {
	//         movie.poster_path = `https://image.tmdb.org/t/p/w500${
	//           movie.poster_path
	//           }`;
	//         movie.overview;
	//       });

	//       return movies;
	//     })
	// );
});
