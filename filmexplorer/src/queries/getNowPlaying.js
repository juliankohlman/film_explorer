import { gql } from 'apollo-boost';

export const GET_NOW_PLAYING = gql`
	query($page: Int = 1, $offset: Int = 0, $limit: Int = 20) {
		getNowPlaying(page: $page, offset: $offset, limit: $limit) {
			id
			poster_path
			title
			overview
			total_results
			total_pages
		}
	}
`;
