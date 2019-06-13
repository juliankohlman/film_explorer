import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { GET_GENRE } from '../../queries/getGenre';
import NowPlayingFilms from './NowPlayingFilms';
import FilmPage from '../UI/FilmPage';
import ManualNowPlaying from './ManualNowPlaying';

class GenreFilms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}
	render() {
		console.log(this.props);

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
					let page = this.state.page;
					return (
						<div>
							<FilmPage
								films={data.getGenre || []}
								currentPage={page}
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
												return state.page === 1
													? { page: state.page }
													: { page: (state.page -= 1) };
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
					);
				}}
			</Query>
		);

		// return this.props.id === 1 ? <ManualNowPlaying /> : <GenrePosters />;
		return this.props.id === 1 ? <NowPlayingFilms /> : <GenrePosters />;
	}
}

export default graphql(GET_GENRE)(GenreFilms);
