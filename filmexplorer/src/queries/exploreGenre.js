import { gql } from 'apollo-boost';

export const exploreGenre = gql`
	query($input: GenreInput) {
		FilmBasic {
			id
			poster_path
			title
			overview
		}
	}
`;
