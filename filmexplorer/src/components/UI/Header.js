import React from 'react';

//Todo logo should be it's own component
//Todo think about using Context Api
const logo = require('../../images/logo.png');

function Header(props) {
	return (
		<div className="dt-ns dt--fixed-ns">
			{/* <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l z-999"> */}
			<header className="bg-black-90 fixed w-100 ph3 pv3 pv3 pv4-ns ph4-m ph5-l z-999">
				<div className="dtc-ns tc pv4 bg-black-10 w-20">
					{/* <a className="dtc v-mid mid-gray link dim fl" href="/" title="Home"> */}

					<a className="dtc v-mid mid-gray link dim fl" href="/" title="Home">
						<img
							src={logo}
							// className="dib w2 h2 w3 h3 w4 h4 br-100"
							className="dib w2 h2 w3 h3 w4 h4 br-100 v-mid"
							alt="The Film Explorer"
						/>
					</a>
				</div>
				{props.children}
			</header>
		</div>
	);
}

export default Header;
