import React, { Component } from 'react';
import { Query, graphql, compose } from 'react-apollo';
import { GET_NOW_PLAYING } from '../../queries/getNowPlaying';

import FilmPage from '../UI/FilmPage';
import { GET_GENRE } from '../../queries/getGenre';

class FilmQuery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}
	render() {
		const { query, resolver } = this.props;
		console.log(query, resolver);

		const QueryResults = () => (
			<Query
				query={query}
				variables={{ page: this.state.page }}
				notifyOnNetworkStatusChange={true}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return 'Loading...';
					if (error) return `Error! ${error.message}`;

					let page = this.state.page;
					//* page skip
					//* add an input field between last and next buttons
					//* gives user ability to jump to a page < last page and > 1
					//* UI example at https://semantic-ui.com/elements/input.html
					return (
						<div>
							<FilmPage
								//* films={data.this.props.resolver || []}
								films={data[`${resolver}`] || []}
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
												resolver: [...fetchMoreResult.resolver]
											};
										}
									})
								}
								lastPage={() =>
									fetchMore({
										variables: {
											page: this.setState(state => {
												return state.page === 1
													? {
															page: state.page
													  }
													: {
															page: (state.page -= 1)
													  };
											})
										},
										updateQuery: (prevPage, { fetchMoreResult }) => {
											if (!fetchMoreResult) return prevPage;
											return {
												resolver: [...fetchMoreResult.resolver]
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

export default compose(
	graphql(GET_NOW_PLAYING, { skip: props => !props.getNowPlaying }),
	graphql(GET_GENRE, { skip: props => props.getGenre })
)(FilmQuery);

// export default graphql(query)(FilmQuery);
