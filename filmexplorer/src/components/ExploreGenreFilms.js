import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';

import { EXPLORE_GENRE } from '../queries/exploreGenre';
import FilmPage from './FilmPage';

class ExploreGenreFilms extends Component {
	render() {
		console.log(this.props.input);
		console.log(this.props.input.page);
		const ExplorePosters = () => (
			<Query query={EXPLORE_GENRE} variables={{ input: this.props.input }}>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return <p>loading...</p>;
					if (error) return <p>error :(</p>;
					console.log(data.exploreGenre);

					return (
						<div>
							<FilmPage
								films={data.exploreGenre || []}
								nextPage={() =>
									fetchMore({
										variables: {
											input: Object.assign({}, this.props.input, {
												page: (this.props.input.page += 1)
											})
										},
										updateQuery: (prevPage, { fetchMoreResult }) => {
											if (!fetchMoreResult) return prevPage;
											return {
												exploreGenre: [...fetchMoreResult.exploreGenre]
											};
										}
									})
								}
								// Todo debug page boundary error.
								lastPage={() =>
									fetchMore({
										variables: {
											input:
												this.props.input === 1
													? Object.assign({}, this.props.input, {
															page: this.props.input.page
													  })
													: Object.assign({}, this.props.input, {
															page: (this.props.input.page -= 1)
													  })
										},
										updateQuery: (prevPage, { fetchMoreResult }) => {
											if (!fetchMoreResult) return prevPage;
											return {
												exploreGenre: [...fetchMoreResult.exploreGenre]
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
