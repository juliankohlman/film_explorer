import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
// import { Link } from 'react-router-dom';
import { GET_NOW_PLAYING } from '../queries/getGenre';

export default class NowPlayingFilms extends Component {
	render() {
		const NowPlayingPosters = () => (
			<Query query={GET_NOW_PLAYING}>
				{({ loading, error, data }) => {
					if (loading) return 'Loading...';
					if (error) return `Error! ${error.message}`;

					return (
						<article style={{ paddingTop: '342px' }}>
							{data.getNowPlaying.map(film => (
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
		return <NowPlayingFilms />;
	}
}
