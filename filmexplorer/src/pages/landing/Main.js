import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from '../../components/Header';
import NowPlaying from '../landing/NowPlaying';

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />

				{/* <Switch> */}
				{/* <Route exact path="/nowplaying" component={NowPlaying} /> */}
				{/* </Switch> */}
				{/* <div>
					<section class="cf pt7">
						<div class="fl w-100 w-50-m w-25-l bg-black-10 tc pv4">
							<Link to="/nowplaying">Now Playing</Link>
						</div>
						<div class="fl w-100 w-50-m w-25-l bg-black-05 tc pv4">
							<Link to="/nowplaying">Now Playing</Link>
						</div>
						<div class="fl w-100 w-50-m w-25-l bg-black-20 tc pv4">
							<Link to="/nowplaying">Now Playing</Link>
						</div>
						<div class="fl w-100 w-50-m w-25-l bg-black-30 tc pv4">
							<Link to="/nowplaying">Now Playing</Link>
						</div>
            </section>{' '} 
				</div>
        */}
				{/* <ul className="pt7">
					<li>
						<Link to="/nowplaying">Now Playing</Link>
					</li>
				</ul> */}
			</div>
		);
	}
}
