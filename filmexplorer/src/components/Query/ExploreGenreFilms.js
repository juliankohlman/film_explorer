import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';

import { EXPLORE_GENRE } from '../../queries/exploreGenre';
import FilmPage from '../UI/FilmPage';

class ExploreGenreFilms extends Component {
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
		console.log(this.props.input);
		console.log(this.props.input.page);
		const ExplorePosters = () => (
			<Query
				query={EXPLORE_GENRE}
				variables={{ input: this.props.input, page: this.state.page }}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return <p>loading...</p>;
					if (error) return <p>error :(</p>;
					console.log(data.exploreGenre);
					let page = this.state.page;
					return (
						<div>
							<div style={{ marginTop: '350px' }}>
								<label htmlFor="jump">{`Jump to page less than ${
									data.exploreGenre[0].total_pages
								}`}</label>
								<form onSubmit={this.jumpPage}>
									<input
										// onChange={this.jumpPage}
										type="number"
										name="jump"
										min="1"
										max={data.exploreGenre[0].total_pages}
										ref={input => (this.input = input)}
									/>
								</form>
							</div>
							<FilmPage
								films={data.exploreGenre || []}
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
		return <ExplorePosters />;
	}
}

export default graphql(EXPLORE_GENRE)(ExploreGenreFilms);
