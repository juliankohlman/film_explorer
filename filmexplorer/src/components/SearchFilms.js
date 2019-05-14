import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { SEARCH_FILM } from '../queries/searchFilm';
import FilmPage from './FilmPage';

//TODO know difference between withApollo vs graphql()

class SearchFilms extends Component {
	// Todo add pagination, which will get refactored to be more D.R.Y later
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}
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

					return (
						<div>
							<FilmPage
								films={data.searchFilm || []}
								nextPage={() =>
									fetchMore({
										variables: {
											page: this.setState(state => {
												return {
													page: (state.page += 1
														? (state.page += 1)
														: state.page)
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
												searchFilm: [...fetchMoreResult.searchFilm]
											};
										}
									})
								}
							/>
						</div>
					);

					// return (
					// 	<article style={{ paddingTop: '342px' }}>
					// 		{data.searchFilm.map(film => (
					// 			<Link
					// 				to={`/detail/${film.id}`}
					// 				className="fl w-50 w-25-l link overflow-hidden"
					// 				key={film.id}
					// 			>
					// 				<div
					// 					role="img"
					// 					aria-label={film.title}
					// 					className="grow aspect-ratio--4x6 "
					// 					style={{
					// 						background: `url(${
					// 							film.poster_path
					// 						}) no-repeat center center`,
					// 						backgroundSize: 'cover'
					// 					}}
					// 				/>
					// 			</Link>
					// 		))}
					// 	</article>
					// );
				}}
			</Query>
		);
		return <FilmSearchPosters />;
	}
}

export default graphql(SEARCH_FILM)(SearchFilms);
