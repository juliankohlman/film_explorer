import React, { Component } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import SortBy from '../components/SortBy';
import FilterBy from '../components/FilterBy';
import ActorSearch from '../components/ActorDirectorSearch';
import Button from '../components/Button';
import CallToAction from '../components/CallToAction';

import GenreFilms from '../components/GenreFilms';
import { genreIDs } from '../utils/genres';

export default class Genre extends Component {
	render() {
		// let ctaGenre = this.props.match.params.key;
		// if (ctaGenre === 'nowplaying') {
		// 	ctaGenre = 'Now exploring Films currently in Theaters';
		// } else if (ctaGenre === 'scienceFiction') {
		// 	ctaGenre = 'Now exploring the Science Fiction Genre...';
		// } else if (ctaGenre === 'tvMovie') {
		// 	ctaGenre = 'Now exploring television and streaming Films...';
		// } else {
		// 	ctaGenre = `Now exploring the ${ctaGenre[0].toUpperCase()}${ctaGenre.slice(
		// 		1
		// 	)} Genre...`;
		// }
		return (
			<Container>
				<Header>
					<CallToAction
						// callout={`Now exploring the ${
						// genreIDs[this.props.match.params.key].label
						// } genre...`}
						callout={genreIDs[this.props.match.params.key].label}
					/>
					{/* Extract components sortby,filterby,actorsearch, and buttons to new component
              figure out how to pass id so it can inform the query along with rest of input data
          */}
					<SortBy />
					<FilterBy />
					<ActorSearch />
					<Button text="Explore" />
					<Button text="Home" />
				</Header>

				<GenreFilms id={genreIDs[this.props.match.params.key].id} />
			</Container>
		);
	}
}
