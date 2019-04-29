import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { EXPLORE_GENRE } from '../queries/exploreGenre';

class ExploreGenreFilms extends Component {
	render() {
		console.log(this.props.input);
		const ExplorePosters = () => (
			<Query query={EXPLORE_GENRE} variables={{ input: this.props.input }}>
				{({ loading, error, data }) => {
					if (loading) return <p>loading...</p>;
					if (error) return <p>error :(</p>;
					console.log(data.exploreGenre);

					return (
						<article style={{ paddingTop: '342px' }}>
							{data.exploreGenre.map(film => (
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
		return <ExplorePosters />;
	}
}

export default graphql(EXPLORE_GENRE)(ExploreGenreFilms);
