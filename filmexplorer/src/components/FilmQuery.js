import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
//Todo query will come from props now
import { GET_NOW_PLAYING } from '../queries/getNowPlaying';
import FilmPage from './FilmPage';
//Todo all query components can be D.R.Y pass in query component and query name as props example: GET_NOW_PLAYING, getNowPlaying
class FilmQuery extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	page: 1
		// };
	}
	render() {
		const QueryResults = ({ nextPage, lastPage }) => (
			<Query
				query={GET_NOW_PLAYING}
				variables={{ page: 1, offset: 0, limit: 20 }}
				notifyOnNetworkStatusChange={true}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return 'Loading...';
					if (error) return `Error! ${error.message}`;
					//* data.this.props.resolver ?????
					console.log(data.getNowPlaying);
					console.log(data);

					// console.log(this.state.page);
					let i = 1;
					//* page skip
					//* add an input field between last and next buttons
					//* gives user ability to jump to a page < last page and > 1
					return (
						<div>
							<FilmPage
								// films={data.this.props.resolver || []}
								films={data.getNowPlaying || []}
								currentPage={i}
								nextPage={() =>
									fetchMore({
										variables: {
											offset: data.getNowPlaying.length,
											page: (i += 1)
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
		return <QueryResults />;
	}
}

export default graphql(GET_NOW_PLAYING)(FilmQuery);
