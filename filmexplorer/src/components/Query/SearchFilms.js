import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { SEARCH_FILM } from '../../queries/searchFilm';
import FilmPage from '../UI/FilmPage';
import { GoRocket } from 'react-icons/go';

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
					let films = data.searchFilm;
					return (
						<>
							<div className="searchPaginationData">
								<span className="searchPaginationText">
									{films[0].total_results} Total Films To Explore
								</span>
								<span className="searchPaginationText">{`Now viewing Page ${page} of ${
									films[0].total_pages
								}`}</span>

								<form onSubmit={this.jumpPage}>
									<label htmlFor="jump">
										Page Jump <GoRocket style={{ verticalAlign: 'middle' }} />
									</label>
									<input
										type="number"
										name="jump"
										min="1"
										max={films[0].total_pages}
										ref={input => (this.input = input)}
									/>
								</form>
							</div>
							<FilmPage
								controls={'searchControls'}
								chevron={'searchChevron'}
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
						</>
					);
				}}
			</Query>
		);
		return <FilmSearchPosters />;
	}
}

export default graphql(SEARCH_FILM)(SearchFilms);
