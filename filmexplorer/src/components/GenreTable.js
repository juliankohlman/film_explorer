import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import NowPlaying from '../pages/NowPlaying';
import { genreIDs } from '../utils/genres';

//Todo iterate over genres creating cards which are links to genre specific routes/pages
export default class GenreTable extends Component {
	render() {
		return (
			<section className="cf pt7">
				{Object.keys(genreIDs).map(genre => (
					<Link to={`/genre/${genre}`} key={genre}>
						<GenreCard key={genreIDs[genre]} genre={genre} />
					</Link>
				))}
			</section>
		);
	}
}
