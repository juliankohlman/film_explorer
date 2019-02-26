// ! TODO USE the api-connector pattern (axios functions separated from resolver functions)
import {
	nowPlaying,
	genreFilms,
	filmDetails,
	genreQuery
} from './tmdb-connector';
/**
 * Building dynamic requests
 * base request
 * Query string options get added based on order on api page SEE => https://developers.themoviedb.org/3/discover/movie-discover
 * Can use a regex helper function to build queries on frontend based on users selections for sorting and exploration criteria
 * https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API}&language=en-US&include_adult=false&include_video=false&page=1
 * Potential modifiers
 * &with_genres=string...but maps to ints like 28
 * &primary_release_year=integer
 * &sort_by=(popularity|release_date|revenue|title) <= this goes directly after US in base req string
 * All base req modifiers should be added as args to the resolver for genres selections
 ** CREATE a custom query builder helper function to handle this!
 * On the front-end a 'next' button will increment the page by 1 and run the query again
 * Should map all sorting options to user selections
 * Future feature: query by actor/director/studio...etc
 *! Add input type to handle custom queries contained within specific genres
 */
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
