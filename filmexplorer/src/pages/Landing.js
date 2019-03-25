import React, { Component } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import FilmSearch from '../components/FilmSearch';
import GenreTable from '../components/GenreTable';
// import { genreIDs, genres } from '../utils/genres';

export default class Landing extends Component {
	render() {
		return (
			<Container>
				<Header>
					<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<CallToAction callout="Welcome to the Film Explorer" />
					</div>
					<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<FilmSearch />
					</div>
				</Header>
				<GenreTable />
			</Container>
		);
	}
}
