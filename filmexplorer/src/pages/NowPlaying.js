import React, { Component } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
// import SortBy from '../components/SortBy';
// import FilterBy from '../components/FilterBy';
// import ActorSearch from '../components/ActorDirectorSearch';
import Button from '../components/Button';
import CallToAction from '../components/CallToAction';
import NowPlayingFilms from '../components/NowPlayingFilms';

export default class NowPlaying extends Component {
	render() {
		return (
			<Container>
				<Header>
					<CallToAction callout="Now exploring the <genre name> genre..." />
					{/* <SortBy />
					<FilterBy />
					<ActorSearch /> */}
					<Button text="Explore" />
					<Button text="Home" />
				</Header>
				{/* <FilmTable />
				 */}
				{/* ADD NOWPLAYING QUERY COMPONENT HERE */}
				<NowPlayingFilms />
			</Container>
		);
	}
}
