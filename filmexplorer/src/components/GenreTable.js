import React, { Component } from 'react';

//todo import genres from utils
import GenreCard from './GenreCard';
import genres from '../utils/genres';

export default class GenreTable extends Component {
	render() {
		return (
			<section className="cf">
				{genres.map(genre => (
					<GenreCard genre={genre} />
				))}
			</section>
		);
	}
}
