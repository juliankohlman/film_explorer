import { gql } from 'apollo-boost';

export const searchPerson = gql`
	query searchPerson($queryString: String, $page: Int = 1) {
		searchPerson(queryString: $queryString, page: $page) {
			name
			popularity
			id
			profile_path
		}
	}
`;
