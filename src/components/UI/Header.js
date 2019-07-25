import React from 'react';

//Todo logo should be it's own component
const logo = require('../../images/logo.png');

const Header = props => {
	return (
		<div className={props.style}>
			<a className="logoLink" href="/" title="home">
				<img src={logo} className="logoDisplay" alt="The Film Explorer" />
			</a>
			{props.children}
		</div>
	);
};

export default Header;
