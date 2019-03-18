import React, { Component } from 'react';
// import CallToAction from './CallToAction';
// import FilmSearch from './FilmSearch';
//Todo logo should be it's own component
const logo = require('../images/logo.png');

function Header(props) {
	return (
		<div className="dt-ns dt--fixed-ns">
			{/* <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l z-999"> */}
			<header className="bg-black-90 fixed w-100 ph3 pv3 pv3 pv4-ns ph4-m ph5-l z-999">
				<div className="dtc-ns tc pv4 bg-black-10 w-30">
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
				{props.children}
				{/* <div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<CallToAction callout="Welcome to the Film Explorer" />
					</div>
					<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<FilmSearch />
					</div> */}

				{/* <CallToAction callout="hello world" /> */}
				{/* <FilmSearch /> */}
			</header>
		</div>
	);
}

export default Header;
