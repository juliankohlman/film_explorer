import React, { Component } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import FilmBackdrop from '../components/FilmBackdrop';
import Button from '../components/Button';
import FilmPoster from '../components/FilmPoster';
import FilmOverview from '../components/FilmOverview';
import FilmCredits from '../components/FilmCredits';

export default class Detail extends Component {
	render() {
		return (
			<Container>
				<Header>
					<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<CallToAction callout="The Film Explorer" />
					</div>
					<Button text="Home" />
					<Button text="Back to Genre" />
				</Header>
				<div style={{ paddingTop: '274px' }}>
					<FilmBackdrop />
				</div>
				<FilmPoster />
				<FilmOverview />
				<FilmCredits />
			</Container>
		);
	}
}
