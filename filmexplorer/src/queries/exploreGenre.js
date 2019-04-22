import { gql } from 'apollo-boost';

export const EXPLORE_GENRE = gql`
	query($input: GenreInput) {
		exploreGenre(input: $input) {
			id
			poster_path
			title
			overview
		}
	}
`;
