import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
// import { Link } from 'react-router-dom';
import { GET_NOW_PLAYING } from '../queries/getNowPlaying';
import FilmPage from './FilmPage';
//Todo all query components can be D.R.Y pass in query component and query name as props example: GET_NOW_PLAYING, getNowPlaying
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
											page: this.setState(state => {
												return { page: (state.page += 1) };
											})
										},
										updateQuery: (prevPage, { fetchMoreResult }) => {
											if (!fetchMoreResult) return prevPage;
											return {
												getNowPlaying: [...fetchMoreResult.getNowPlaying]
											};
										}
									})
								}
								// Todo debug page boundary error.
								lastPage={() =>
									fetchMore({
										variables: {
											page: this.setState(state => {
												return state.page === 1
													? { page: state.page }
													: {
															page: (state.page -= 1)
													  };
											})
										},
										updateQuery: (prevPage, { fetchMoreResult }) => {
											if (!fetchMoreResult) return prevPage;
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
