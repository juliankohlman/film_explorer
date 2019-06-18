import { gql } from 'apollo-boost';
//Todo be sure to tune queries and only grab the fields you'll need. Nowplaying only really needs ids' and poster paths for example
export const GET_NOW_PLAYING = gql`
	query($page: Int = 1) {
		getNowPlaying(page: $page) {
			id
			poster_path
			title
			overview
			total_results
			total_pages
		}
	}
`;
