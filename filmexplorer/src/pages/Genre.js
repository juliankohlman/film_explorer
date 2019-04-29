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
	//todo Add state here for explore options that will get passed into GenreExplore component. Conditionally render based on presence of input in any of the fields => Sort, Release Year, Rating, Runtime, Actor/Director
	render() {
		return (
			<Container>
				<Header>
					<CallToAction callout={genreIDs[this.props.match.params.key].label} />
					{/* Extract components sortby,filterby,actorsearch, and buttons to new component
              figure out how to pass id so it can inform the query along with rest of input data
          */}
					{/* <SortBy /> */}
					<FilterBy />
					{/* <ActorSearch /> */}
					{/* <Button text="Explore" /> */}
					<Button text="Home" />
				</Header>
				{/* If explore options are empty render GenreFilms if an option is present render ExploreFilms component */}
				{/* Component is mounting b/f the id is there */}
				<GenreFilms id={genreIDs[this.props.match.params.key].id} />
			</Container>
		);
	}
}
