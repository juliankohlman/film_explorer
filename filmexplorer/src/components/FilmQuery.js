import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
//Todo query will come from props now
// import { GET_NOW_PLAYING } from '../queries/getNowPlaying';
import FilmPage from './FilmPage';
//Todo all query components can be D.R.Y pass in query component and query name as props example: GET_NOW_PLAYING, getNowPlaying
class FilmQuery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}
	render() {
		const QueryResults = () => (
			<Query
				query={this.props.query}
				variables={{ page: this.state.page }}
				notifyOnNetworkStatusChange={true}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return 'Loading...';
					if (error) return `Error! ${error.message}`;
					// data.this.props.resolver ?????
					console.log(data.getNowPlaying);
					console.log(this.state.page);
					let page = this.state.page;
					return (
						<div>
							<FilmPage
								// films={data.this.props.resolver || []}
								films={data.getNowPlaying || []}
								currentPage={page}
								// page skip
								// add an input field between last and next buttons
								// gives user ability to jump to a page < last page and > 1
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
												// making this reusable by making getNowPlaying dynamic
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
												// making this reusable by making getNowPlaying dynamic
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
		return <QueryResults />;
	}
}

export default graphql(GET_NOW_PLAYING)(NowPlayingFilms);
