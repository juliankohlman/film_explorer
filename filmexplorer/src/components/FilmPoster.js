import React, { PureComponent } from 'react';

//todo clean up component make it more flexible/responsive ready for FilmDetail components
export default class FilmPoster extends PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div
				role="img"
				aria-label={this.props.title}
				// class="grow aspect-ratio--4x6 "
				style={{
					background: `url(${this.props.poster_path})`,
					backgroundSize: 'cover',
					width: '330px',
					height: '500px'
				}}
			/>
		);
	}
}
