import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import { genreIDs, genres } from '../../utils/genres';

export default class GenreTable extends Component {
	render() {
		return (
			<section className="cf pt7">
				{Object.keys(genreIDs).map((genre, idx) => (
					// <article className="fl w-100-l w-50-m w-25-ns pa1 pv6-ns" key={genre}>
					<article key={genre}>
						<Link to={`/genre/${genre}`}>
							<GenreCard key={genreIDs.genre} genre={genres[idx]} />
						</Link>
					</article>
				))}
			</section>
		);
	}
}
