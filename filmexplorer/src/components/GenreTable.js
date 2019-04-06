import React, { Component } from 'react';
//todo import genres from utils
import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import { genreIDs } from '../utils/genres';
import { GetGenre } from '../queries/getGenre';

//Todo iterate over genres creating cards which are links to genre specific routes/pages
export default class GenreTable extends Component {
	// <Route path="comments" component={() => (<Comments myProp="value" />)}/>

	render() {
		return (
			<section className="cf pt7">
				{Object.keys(genreIDs).map(genre => (
					<Link to={`/genre/${genre}`}>
						{/* Remove now playing from table */}
						{/* Add tabs or different pages for nowPlaying, trending etc.... */}
						{/* Should link to the getGenre query pass needed props genreID into getGenre for query */}
						{/* <GetGenre /> */}
						<GenreCard key={genreIDs[genre]} genre={genre} />
					</Link>
				))}
			</section>
		);
	}
}
