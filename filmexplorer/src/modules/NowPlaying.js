import { gql } from 'apollo-boost';

//Todo be sure to tune queries and only grab the fields you'll need. Nowplaying only really needs ids' and poster paths for example
const GET_NOW_PLAYING = gql`
	{
		getNowPlaying {
			id
			poster_path
			title
			overview
		}
	}
`;

export const NowPlaying = () => (
	<Query query={GET_NOW_PLAYING}>
		{({ loading, error, data }) => {
			if (loading) return <p>loading...</p>;
			if (error) return <p>error :(</p>;
			console.log(data.getNowPlaying);

			return data.getNowPlaying.map(movie => (
				<div key={movie.id}>
					<img src={movie.poster_path} alt="poster" srcSet="" />
				</div>
			));
		}}
	</Query>
);
