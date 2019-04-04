import { gql } from 'apollo-boost';

export const searchFilm = gql`
	query($queryString: String, $page: Int = 1) {
		FilmBasic {
			id
			poster_path
			title
			overview
		}
	}
`;
