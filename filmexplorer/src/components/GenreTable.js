import React, { Component } from 'react';

//todo import genres from utils
import GenreCard from './GenreCard';
import genres from '../utils/genres';

export default class GenreTable extends Component {
	render() {
		return (
			<section className="cf pt7">
				{genres.map(genre => (
					<GenreCard key={genre.toString()} genre={genre} />
				))}
			</section>
		);
	}
}
