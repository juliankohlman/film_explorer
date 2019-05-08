import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
// import { Link } from 'react-router-dom';
import { GET_GENRE } from '../queries/getGenre';
import NowPlayingFilms from './NowPlayingFilms';
import FilmPage from './FilmPage';

class GenreFilms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}
	render() {
		console.log(this.props.id);
		const GenrePosters = () => (
			<Query
				query={GET_GENRE}
				variables={{ genreID: this.props.id, page: this.state.page }}
				notifyOnNetworkStatusChange={true}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return <p>loading...</p>;
					if (error) return <p>error :(</p>;
					console.log(data.getGenre);
					return (
						<div>
							<FilmPage
								films={data.getGenre || []}
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
												getGenre: [...fetchMoreResult.getGenre]
											};
										}
									})
								}
								// Todo debug page boundary error.
								lastPage={() =>
									fetchMore({
										variables: {
											page: this.setState(state => {
												return { page: (state.page -= 1) };
											})
										},
										updateQuery: (prevPage, { fetchMoreResult }) => {
											if (!fetchMoreResult) return prevPage;
											return {
												getGenre: [...fetchMoreResult.getGenre]
											};
										}
									})
								}
							/>
						</div>
						// <article style={{ paddingTop: '342px' }}>
						// 	<button>Next page</button>
						// 	{data.getGenre.map(film => (
						// 		<Link
						// 			to={`/detail/${film.id}`}
						// 			className="fl w-50 w-25-l link overflow-hidden"
						// 			key={film.id}
						// 		>
						// 			<div
						// 				role="img"
						// 				aria-label={film.title}
						// 				className="grow aspect-ratio--4x6 "
						// 				style={{
						// 					background: `url(${
						// 						film.poster_path
						// 					}) no-repeat center center`,
						// 					backgroundSize: 'cover'
						// 				}}
						// 			/>
						// 		</Link>
						// 	))}
						// </article>
					);
				}}
			</Query>
		);

		return this.props.id === 1 ? <NowPlayingFilms /> : <GenrePosters />;
		// return <GenrePosters />;
	}
}

export default graphql(GET_GENRE)(GenreFilms);
