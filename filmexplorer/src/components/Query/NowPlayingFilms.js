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
					let films = data.getNowPlaying;
					return (
						<>
							<div className="paginationContainer">
								<label htmlFor="jump">
									{`Jump to page less than ${films[0].total_pages}`}
								</label>
								<form onSubmit={this.jumpPage}>
									<input
										type="number"
										name="jump"
										min="1"
										max={films[0].total_pages}
										ref={input => (this.input = input)}
									/>
								</form>
								<h4>{`Page ${page} of ${films[0].total_pages}`}</h4>
								<h3>{films[0].total_results} Total Films To Explore</h3>
								{/* <div className="pageControls">
								</div> */}
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
						</>
					);
				}}
			</Query>
		);
		return <NowPlayingPosters />;
	}
}

export default graphql(GET_NOW_PLAYING)(NowPlayingFilms);
