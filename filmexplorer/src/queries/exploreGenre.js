import { gql } from 'apollo-boost';

export const EXPLORE_GENRE = gql`
	query exploreGenre($input: GenreInput, $page: Int = 1) {
		exploreGenre(input: $input, page: $page) {
			id
			poster_path
			title
			overview
			total_results
			total_pages
		}
	}
`;
