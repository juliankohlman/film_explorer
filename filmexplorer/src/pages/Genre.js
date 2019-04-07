import React, { Component } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import SortBy from '../components/SortBy';
import FilterBy from '../components/FilterBy';
import ActorSearch from '../components/ActorDirectorSearch';
import Button from '../components/Button';
import CallToAction from '../components/CallToAction';
import FilmTable from '../components/FilmTable';
import GenreFilms from '../components/GenreFilms';
import { genreIDs } from '../utils/genres';

export default class Genre extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Container>
				<Header>
					<CallToAction callout="Now exploring the <genre name> genre..." />
					<SortBy />
					<FilterBy />
					<ActorSearch />
					<Button text="Explore" />
					<Button text="Home" />
				</Header>
				{/* <FilmTable />
				 */}
				<GenreFilms id={genreIDs[this.props.match.params.key]} />
			</Container>
		);
	}
}
