import { gql } from 'apollo-boost';

export const GET_NOW_PLAYING = gql`
	query($page: Int = 1) {
		getNowPlaying(page: $page) {
			id
			poster_path
			title
			overview
		}
	}
`;
