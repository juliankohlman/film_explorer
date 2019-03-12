import React, { Component } from 'react';
const logo = require('../images/logo.png');

export default class Header extends Component {
	render() {
		return (
			<div className="flex justify between">
				<header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l z-999">
					<a class="dtc v-mid mid-gray link dim fl" href="/" title="Home">
						<img
							src={logo}
							class="dib w2 h2 w3 h3 w4 h4 br-100"
							alt="Site Name"
						/>
					</a>
				</header>

				{/* pt6-7 */}
				{/* <Landing /> */}
			</div>
		);
	}
}
