import React, { PureComponent } from 'react';

export default class FilmPoster extends PureComponent {
	render() {
		return (
			<div
				role="img"
				aria-label="Primer movie"
				// class="grow aspect-ratio--4x6 "
				style={{
					background:
						'url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg) no-repeat center center',
					backgroundSize: 'cover',
					width: '330px',
					height: '500px'
				}}
			/>
		);
	}
}
