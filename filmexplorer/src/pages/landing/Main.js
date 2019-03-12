import React, { Component } from 'react';
import Header from '../../components/Header';
import NowPlaying from '../landing/NowPlaying';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Main extends Component {
	render() {
		return (
			<Router>
				<Header />
				<div>
					<Route path="/nowplaying" component={NowPlaying} />
					<Link to="/nowplaying">Now Playing Card</Link>
				</div>
			</Router>
		);
	}
}
