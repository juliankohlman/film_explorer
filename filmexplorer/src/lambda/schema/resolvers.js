import { connectors } from './tmdbConnectors';
import { UserInputError } from 'apollo-server-lambda';

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
			const validationErrors = {};
			if (genreID === null) {
				validationErrors.genreID = 'No genre id given';
			}
			if (Object.keys(validationErrors).length > 0) {
				throw new UserInputError('failed to validate input', {
					validationErrors
				});
			}
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
