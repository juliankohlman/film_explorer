import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { SEARCH_FILM } from '../../queries/searchFilm';
import FilmPage from '../UI/FilmPage';

class SearchFilms extends Component {
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
		const FilmSearchPosters = () => (
			<Query
				query={SEARCH_FILM}
				variables={{ queryString: this.props.query, page: this.state.page }}
				notifyOnNetworkStatusChange={true}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return 'Loading...';
					if (error) return `Error! ${error.message}`;
					console.log(data.searchFilm);
					let page = this.state.page;
					return (
						<div>
							<div style={{ marginTop: '350px' }}>
								<label htmlFor="jump">{`Jump to page less than ${
									data.searchFilm[0].total_pages
								}`}</label>
								<form onSubmit={this.jumpPage}>
									<input
										type="number"
										name="jump"
										ref={input => (this.input = input)}
									/>
								</form>
							</div>
							<FilmPage
								films={data.searchFilm || []}
								currentPage={page}
								//! Use config.props to refactor (https://www.apollographql.com/docs/react/api/react-apollo#graphql-config-props)
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
												searchFilm: [...fetchMoreResult.searchFilm]
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
												searchFilm: [...fetchMoreResult.searchFilm]
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
		return <FilmSearchPosters />;
	}
}

export default graphql(SEARCH_FILM)(SearchFilms);
