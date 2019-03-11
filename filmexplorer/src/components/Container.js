import React, { Component } from 'react';
import LandingNav from '../pages/landing/LandingNav';
import LandingSearch from '../pages/landing/LandingSearch';
import Landing from '../pages/landing/Landing';
const logo = require('../images/logo.png');

export default class Container extends Component {
	render() {
		return (
			<div>
				<header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l z-999">
					<a class="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
						<img
							src={logo}
							class="dib w2 h2 w3-m h3-m w4-l h4-l br-100"
							alt="Site Name"
						/>
					</a>
					{/* Custom Navigation Component */}

					<LandingNav />
					<LandingSearch />
				</header>

				{/* pt6-7 */}
				{/* <Landing /> */}
			</div>
		);
	}
}
