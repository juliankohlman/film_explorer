//! Temporary tachyons placeholder component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//* Convert to function component
export default class FilmCard extends Component {
	render() {
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
	}
}
