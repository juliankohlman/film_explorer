import React, { Component } from 'react';
//todo import genres from utils
import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import { genreIDs } from '../utils/genres';

//Todo iterate over genres creating cards which are links to genre specific routes/pages
export default class GenreTable extends Component {
	render() {
		return (
			<section className="cf pt7">
				{Object.keys(genreIDs).map(genre => (
					// TODO ADD LOGIC TO HANDLE NOWPLAYING/TRENDING SELECTION BY USER
					<Link to={`/genre/${genre}`} key={genre}>
						{/* Remove now playing from table */}
						{/* Add tabs or different pages for nowPlaying, trending etc.... */}
						<GenreCard key={genreIDs[genre]} genre={genre} />
					</Link>
				))}
			</section>
		);
	}
}
