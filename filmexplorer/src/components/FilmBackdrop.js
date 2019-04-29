import React, { PureComponent } from 'react';

export default class FilmBackdrop extends PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div
				class="vh-100 cover bg-center"
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
						this.props.backdrop_path
					})`
				}}
			/>
		);
	}
}
