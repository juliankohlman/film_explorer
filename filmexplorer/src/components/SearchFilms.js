import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { SEARCH_FILM } from '../queries/searchFilm';

//TODO know difference between withApollo vs graphql()

class SearchFilms extends Component {
	render() {
		const FilmSearchPosters = ({ query }) => (
			<Query query={SEARCH_FILM} variables={{ queryString: this.props.query }}>
				{({ loading, error, data }) => {
					if (loading) return 'Loading...';
					if (error) return `Error! ${error.message}`;
					console.log(data.searchFilm);

					return (
						<article style={{ paddingTop: '342px' }}>
							{data.searchFilm.map(film => (
								<Link
									to={`/detail/:id`}
									className="fl w-50 w-25-l link overflow-hidden"
									key={film.id}
								>
									<div
										role="img"
										aria-label={film.title}
										className="grow aspect-ratio--4x6 "
										style={{
											background: `url(${
												film.poster_path
											}) no-repeat center center`,
											backgroundSize: 'cover'
										}}
									/>
								</Link>
							))}
						</article>
					);
				}}
			</Query>
		);
		return <FilmSearchPosters />;
	}
}

export default graphql(SEARCH_FILM)(SearchFilms);
// export default withApollo(SearchFilms);
