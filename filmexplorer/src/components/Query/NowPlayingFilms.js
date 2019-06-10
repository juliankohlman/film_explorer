import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { GET_NOW_PLAYING } from '../../queries/getNowPlaying';
import FilmPage from '../UI/FilmPage';

class NowPlayingFilms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1,
			jumpTo: 1
		};
	}

	render() {
		const NowPlayingPosters = () => (
			<Query
				query={GET_NOW_PLAYING}
				variables={{ page: this.state.page, jumpTo: this.state.jumpTo }}
				notifyOnNetworkStatusChange={true}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return 'Loading...';
					if (error) return `Error! ${error.message}`;
					// console.log(data.getNowPlaying);
					// console.log(this.state.page);
					let page = this.state.page;
					let jumpTo = this.state.jumpTo;
					return (
						<div>
							<FilmPage
								films={data.getNowPlaying || []}
								currentPage={jumpTo}
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
				}}
			</Query>
		);
		return <NowPlayingPosters />;
	}
}

export default graphql(GET_NOW_PLAYING)(NowPlayingFilms);
