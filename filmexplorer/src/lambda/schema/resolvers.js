import { connectors } from './tmdbConnectors';

export const resolvers = {
	Query: {
		getNowPlaying(_, { page }) {
			return connectors.nowPlaying(_, { page });
		},
		searchPerson(_, { queryString }) {
			return connectors.getPerson(_, { queryString });
		},
		searchFilm(_, { queryString, page }) {
			return connectors.getFilm(_, { queryString, page });
		},
		getGenre(_, { genreID, page }) {
			return connectors.genreFilms(_, { genreID, page });
		},
		getFilmDetails(_, { filmID }) {
			return connectors.filmDetails(_, { filmID });
		},
		exploreGenre(_, { input, page }) {
			return connectors.genreQuery(_, {
				input,
				page
			});
		}
	}
};
