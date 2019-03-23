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
						'url(https://image.tmdb.org/t/p/w500/9SKDSFbaM6LuGqG1aPWN3wYGEyD.jpg) no-repeat center center',
					backgroundSize: 'cover',
					width: '330px',
					height: '500px'
				}}
			/>
		);
	}
}
