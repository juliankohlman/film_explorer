import React from 'react';

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
