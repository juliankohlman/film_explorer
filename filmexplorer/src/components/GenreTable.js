import React, { Component } from 'react';
//todo import genres from utils
import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import { genreIDs } from '../utils/genres';

//Todo iterate over genres creating cards which are links to genre specific routes/pages
export default class GenreTable extends Component {
	// <Route path="comments" component={() => (<Comments myProp="value" />)}/>

	render() {
		return (
			<section className="cf pt7">
				{Object.keys(genreIDs).map(genre => (
					<Link to={`/genre/${genre}`}>
						<GenreCard key={genreIDs[genre]} genre={genre} />
					</Link>
				))}
			</section>
		);
	}
}
