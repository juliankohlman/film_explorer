import { gql } from 'apollo-boost';

export const getNowPlaying = gql`
	{
		FilmBasic {
			id
			poster_path
			title
			overview
		}
	}
`;
