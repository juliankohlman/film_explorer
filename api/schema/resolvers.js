import {
	nowPlaying,
	genreFilms,
	filmDetails,
	genreQuery,
	getPerson,
	getFilm
	// actorDirector
} from './tmdb-connector';

export const resolvers = {
	Query: {
		getNowPlaying(_, { page }) {
			return nowPlaying(_, { page });
		},
		searchPerson(_, { queryString }) {
			return getPerson(_, { queryString });
		},
		searchFilm(_, { queryString }) {
			return getFilm(_, { queryString });
		},
		getGenre(_, { genreID, page }) {
			return genreFilms(_, { genreID, page });
		},
		getFilmDetails(_, { filmID }) {
			return filmDetails(_, { filmID });
		},
		exploreGenre(_, { input }) {
			return genreQuery(_, {
				input
			});
		}
	}
};
