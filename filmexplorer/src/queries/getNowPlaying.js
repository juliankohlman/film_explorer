import { gql } from 'apollo-boost';

export const GET_NOW_PLAYING = gql`
	query($page: Int = 1, $jumpTo: Int = 1) {
		getNowPlaying(page: $page, jumpTo: $jumpTo) {
			id
			poster_path
			title
			overview
			total_results
			total_pages
		}
	}
`;
