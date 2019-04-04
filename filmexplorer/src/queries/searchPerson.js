import { gql } from 'apollo-boost';

export const searchPerson = gql`
	query($queryString: String, $page: Int = 1) {
		Person {
			name
			popularity
			id
			profile_path
		}
	}
`;
