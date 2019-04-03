import { gql } from 'apollo-boost';

export const getGenre = gql`
	query($genreID: Int!, $page: Int = 1) {
		FilmBasic {
			id
			poster_path
			title
			overview
		}
	}
`;
