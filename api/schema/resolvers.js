import {
	filmDetails,
	nowPlaying,
	genreFilms,
	genreQuery
	// actorDirector
} from './tmdb-connector';

export const resolvers = {
	Query: {
		getNowPlaying(_, { page }) {
			return nowPlaying(_, { page });
		},
		getGenre(_, { genreID, page }) {
			return genreFilms(_, { genreID, page });
		},

		getFilmDetails(_, { filmID }) {
			return filmDetails(_, { filmID });
		},
		// getActorDirector(_, { queryString }) {
		// 	return actorDirector(_, { queryString });
		// },
		exploreGenre(
			_,
			{
				sort_by,
				certification_country,
				certification,
				include_adult,
				include_video,
				page,
				primary_release_year,
				primary_release_date_gte,
				primary_release_date_lte,
				genreID,
				year,
				with_runtime_gte,
				with_runtime_lte
			}
		) {
			return genreQuery(_, {
				sort_by,
				certification_country,
				certification,
				include_adult,
				include_video,
				page,
				primary_release_year,
				primary_release_date_gte,
				primary_release_date_lte,
				genreID,
				year,
				with_runtime_gte,
				with_runtime_lte
			});
		}
	}
};
