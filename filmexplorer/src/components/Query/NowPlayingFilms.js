import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { GET_NOW_PLAYING } from '../../queries/getNowPlaying';
import FilmPage from '../UI/FilmPage';

class NowPlayingFilms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}

	jumpPage = e => {
		e.preventDefault();
		this.setState({
			page: +this.input.value
		});
	};

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
					// console.log(data.getNowPlaying);
					// console.log(this.state.page);
					let page = this.state.page;
					return (
						<div>
							{/* className pageJump */}
							<div style={{ marginTop: '350px' }}>
								<label htmlFor="jump">{`Jump to page less than ${
									data.getNowPlaying[0].total_pages
								}`}</label>
								<form onSubmit={this.jumpPage}>
									<input
										type="number"
										name="jump"
										min="1"
										max={data.getNowPlaying[0].total_pages}
										ref={input => (this.input = input)}
									/>
								</form>
							</div>
							<FilmPage
								films={data.getNowPlaying || []}
								currentPage={page}
								nextPage={() =>
									fetchMore({
										variables: {
											page: this.setState(state => {
												return {
													page: (state.page += 1)
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
