//! Temporary tachyons placeholder component
//* base cards off of material ui/semantic: detail button should be on bottom of card
import React from 'react';
import { Link } from 'react-router-dom';

//* Convert to function component
const FilmCard = props => {
	return (
		<Link
			to={`/detail/:id`}
			className="fl w-50 w-25-l link overflow-hidden"
			key={this.props.id}
		>
			<div
				role="img"
				aria-label={this.props.title}
				className="grow aspect-ratio--4x6 "
				style={{
					background: `url(${background}) no-repeat center center`,
					backgroundSize: 'cover'
				}}
			/>
		</Link>
	);
};

export default FilmCard;
