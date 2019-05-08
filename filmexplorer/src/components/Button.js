import React from 'react';

export default function Button(props) {
	return (
		<div className="ph3 dtc-ns tc pv4 bg-black-05">
			<a
				className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue"
				href={props.href}
			>
				{props.text}
			</a>
		</div>
	);
}
