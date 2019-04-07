import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { GET_GENRE } from '../queries/getGenre';

class GenreFilms extends Component {
	render() {
		console.log(this.props.id);

		const GenrePosters = () => (
			<Query query={GET_GENRE} variables={{ genreID: this.props.id }}>
				{({ loading, error, data }) => {
					if (loading) return <p>loading...</p>;
					if (error) return <p>error :(</p>;
					console.log(data.getGenre);
					return (
						<article style={{ paddingTop: '342px' }}>
							{data.getGenre.map(film => (
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
		return <GenrePosters />;
	}
}

export default graphql(GET_GENRE)(GenreFilms);
