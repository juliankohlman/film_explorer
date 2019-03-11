import React, { Component } from 'react';

const logo = require('../images/logo.png');
// import logo from './logo.png';

export default class Container extends Component {
	render() {
		return (
			<div>
				<header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
					<a class="v-mid mid-gray link dim w-25" href="#" title="Home">
						<img src={logo} class="dib w3 h3 br-100" alt="Site Name" />
					</a>
					<nav class="f6 fw6 ttu tracked fr">
						{/* original link styling `link dim white dib mr3` */}
						<a class="link dim white dib mr3" href="#" title="Home">
							Home
						</a>
						<a class="link dim white dib mr3" href="#" title="About">
							About
						</a>
						<a class="link dim white dib mr3" href="#" title="Store">
							Store
						</a>
						<a class="link dim white dib" href="#" title="Contact">
							Contact
						</a>
					</nav>
				</header>
			</div>
		);
	}
}
