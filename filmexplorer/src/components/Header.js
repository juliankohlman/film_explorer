import React, { Component } from 'react';
import CallToAction from './CallToAction';
import FilmSearch from './FilmSearch';
const logo = require('../images/logo.png');

export default class Header extends Component {
	render() {
		return (
			<div className="dt-ns dt--fixed-ns">
				{/* <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l z-999"> */}
				<header className="bg-black-90 fixed w-100 ph3 pv3 pv3 pv4-ns ph4-m ph5-l z-999">
					<div className="dtc-ns tc pv4 bg-black-10">
						{/* <a className="dtc v-mid mid-gray link dim fl" href="/" title="Home"> */}
						<a className="dtc v-mid mid-gray link dim fl" href="/" title="Home">
							<img
								src={logo}
								// className="dib w2 h2 w3 h3 w4 h4 br-100"
								className="dib w2 h2 w3 h3 w4 h4 br-100 v-mid"
								alt="Site Name"
							/>
						</a>
					</div>
					<div className="dtc-ns tc pv4 bg-black-05 v-mid">
						<CallToAction callout="Welcome to the Film Explorer" />
					</div>
					<div className="dtc-ns tc pv4 bg-black-05 v-mid">
						<FilmSearch />
					</div>

					{/* <CallToAction callout="hello world" /> */}
					{/* <FilmSearch /> */}
				</header>
			</div>
		);
	}
}
