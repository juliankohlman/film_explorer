import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
// import { Link } from 'react-router-dom';
import { GET_NOW_PLAYING } from '../queries/getNowPlaying';
import FilmPage from './FilmPage';

class NowPlayingFilms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}
	render() {
		const NowPlayingPosters = () => (
			<Query
				query={GET_NOW_PLAYING}
				variables={{ page: this.state.page }}
				// fetchPolicy={'cache-and-network'}
				notifyOnNetworkStatusChange={true}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return 'Loading...';
					if (error) return `Error! ${error.message}`;
					console.log(data.getNowPlaying);
					console.log(this.state.page);

					return (
						<div>
							<FilmPage
								films={data.getNowPlaying || []}
								nextPage={() =>
									fetchMore({
										variables: {
											page: this.state.page++
										},
										updateQuery: (lastPage, { fetchMoreResult }) => {
											if (!fetchMoreResult) return lastPage;
											return {
												getNowPlaying: [...fetchMoreResult.getNowPlaying]
											};
										}
									})
								}
							/>
						</div>
					);
					// return (
					// 	<article style={{ paddingTop: '342px' }}>
					// 		<button onClick={nextPage}>Next page</button>
					// 		{data.getNowPlaying.map(film => (
					// 			<Link
					// 				to={`/detail/${film.id}`}
					// 				className="fl w-50 w-25-l link overflow-hidden"
					// 				key={film.id}
					// 			>
					// 				<div
					// 					role="img"
					// 					aria-label={film.title}
					// 					className="grow aspect-ratio--4x6 "
					// 					style={{
					// 						background: `url(${
					// 							film.poster_path
					// 						}) no-repeat center center`,
					// 						backgroundSize: 'cover'
					// 					}}
					// 				/>
					// 			</Link>
					// 		))}
					// 	</article>
					// );
				}}
			</Query>
		);
		return <NowPlayingPosters />;
	}
}

export default graphql(GET_NOW_PLAYING)(NowPlayingFilms);
