import React, { Component } from 'react';
//todo import genres from utils
import GenreCard from './GenreCard';
import genres from '../utils/genres';

//Todo iterate over genres creating cards which are links to genre specific routes/pages
export default class GenreTable extends Component {
	constructor(props) {
		super(props);
	}
	// <Route path="comments" component={() => (<Comments myProp="value" />)}/>

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
