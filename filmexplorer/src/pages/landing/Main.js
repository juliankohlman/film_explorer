import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from '../../components/Header';
import NowPlaying from '../landing/NowPlaying';

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/nowplaying" component={NowPlaying} />
				</Switch>
				<ul className="pt7">
					<li>
						<Link to="/nowplaying">Now Playing</Link>
					</li>
				</ul>
			</div>
		);
	}
}
