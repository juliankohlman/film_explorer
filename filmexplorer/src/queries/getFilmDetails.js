import { gql } from 'apollo-boost';

export const GET_FILM_DETAILS = gql`
	query($filmID: Int!) {
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
		}
	}
`;
