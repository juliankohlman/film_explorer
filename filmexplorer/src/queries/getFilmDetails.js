import { gql } from 'apollo-boost';

export const GET_FILM_DETAILS = gql`
	query getFilmDetails($filmID: Int!) {
		getFilmDetails(filmID: $filmID) {
			backdrop_path
			budget
			genres
			id
			overview
			popularity
			poster_path
			production_companies
			release_date
			revenue
			runtime
			status
			tagline
			title
			cast {
				cast_id
				character
				credit_id
				gender
				id
				name
				order
				profile_path
			}
			crew {
				credit_id
				department
				gender
				id
				job
				name
				profile_path
			}
			videos {
				id
				iso_639_1
				iso_3166_1
				key
				name
				site
				size
				type
			}
			similar {
				id
				poster_path
				title
				overview
			}
			recommendations {
				id
				poster_path
				title
				overview
			}
		}
	}
`;
