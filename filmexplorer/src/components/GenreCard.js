import React from 'react';

export default function GenreCard(props) {
	return (
		<div className="fl w-100 w-50-m w-25-l bg-black-10 tc pv4">
			{props.genre}
		</div>
	);
}
