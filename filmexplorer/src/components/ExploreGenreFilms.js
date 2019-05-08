import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { EXPLORE_GENRE } from '../queries/exploreGenre';
import FilmPage from './FilmPage';

class ExploreGenreFilms extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		page: 1
	// 	};
	// }
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

						// <article style={{ paddingTop: '342px' }}>
						// 	{data.exploreGenre.map(film => (
						// 		<Link
						// 			to={`/detail/${film.id}`}
						// 			className="fl w-50 w-25-l link overflow-hidden"
						// 			key={film.id}
						// 		>
						// 			<div
						// 				role="img"
						// 				aria-label={film.title}
						// 				className="grow aspect-ratio--4x6 "
						// 				style={{
						// 					background: `url(${
						// 						film.poster_path
						// 					}) no-repeat center center`,
						// 					backgroundSize: 'cover'
						// 				}}
						// 			/>
						// 		</Link>
						// 	))}
						// </article>
					);
				}}
			</Query>
		);
		return <ExplorePosters />;
	}
}

export default graphql(EXPLORE_GENRE)(ExploreGenreFilms);
