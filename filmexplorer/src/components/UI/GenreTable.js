import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import { genreIDs, genres } from '../../utils/genres';

export default class GenreTable extends Component {
	render() {
		return (
			<section className="cf pt7">
				{Object.keys(genreIDs).map((genre, idx) => (
					<Link to={`/genre/${genre}`} key={genre}>
						<GenreCard key={genreIDs.genre} genre={genres[idx]} />
					</Link>
				))}
			</section>
		);
	}
}
