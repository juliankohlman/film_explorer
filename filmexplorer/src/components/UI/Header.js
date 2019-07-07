import React from 'react';

//Todo logo should be it's own component
const logo = require('../../images/logo.png');

const Header = props => {
	return (
		// <div className="dt-ns dt--fixed-ns">
		<div className="header">
			{/* <a className="dtc v-mid mid-gray link dim fl" href="/" title="Home">
				<img
					src={logo}
					className="dib w2 h2 w3 h3 w4 h4 br-100 v-mid"
					alt="The Film Explorer"
				/>
			</a> */}
			{props.children}
			{/* <header className="bg-black-90 fixed w-100 ph3 pv3 pv3 pv4-ns ph4-m ph5-l z-999">
				<div className="dtc-ns tc pv4 bg-black-10 w-20">
				</div>
			</header> */}
		</div>
	);
};

export default Header;
