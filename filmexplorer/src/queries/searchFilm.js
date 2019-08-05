import { gql } from 'apollo-boost';

export const SEARCH_FILM = gql`
	query searchFilm($queryString: String, $page: Int = 1) {
		searchFilm(queryString: $queryString, page: $page) {
			id
			poster_path
			title
			overview
			total_results
			total_pages
		}
	}
`;
