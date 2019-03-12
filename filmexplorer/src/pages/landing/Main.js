import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../../components/Header';
import NowPlaying from '../landing/NowPlaying';

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
					<div className="pt7">
						<ul>
							<li>
								<Link to="/nowplaying">Now Playing</Link>
							</li>
						</ul>
						<Route path="/nowplaying" component={NowPlaying} />
					</div>
				</Router>
			</div>
		);
	}
}
