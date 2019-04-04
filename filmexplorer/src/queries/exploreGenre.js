import { gql } from 'apollo-boost';

export const exploreGenre = gql`
	query($input: GenreInput) {
		exploreGenre(input: $input) {
			id
			poster_path
			title
			overview
		}
	}
`;
