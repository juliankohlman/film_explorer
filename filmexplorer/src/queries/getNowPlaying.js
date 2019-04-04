import { gql } from 'apollo-boost';

export const getNowPlaying = gql`
	query($page: Int = 1) {
		getNowPlaying(page: $page) {
			id
			poster_path
			title
			overview
		}
	}
`;
