import React, { Component } from 'react';
import LandingNav from '../pages/landing/LandingNav';

const logo = require('../images/logo.png');

export default class Container extends Component {
	render() {
		return (
			<div>
				<header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
					<a class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
						<img src={logo} class="dib w3 h3 br-100" alt="Site Name" />
					</a>
					{/* Custom Navigation Component */}
					<LandingNav />
				</header>
			</div>
		);
	}
}
