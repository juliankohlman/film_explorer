import React from 'react';

//todo clean up component make it more flexible/responsive ready for FilmDetail components
const FilmPoster = props => {
	const { title, poster_path } = props;
	return (
		<div
			className="left"
			role="img"
			aria-label={title}
			// class="aspect-ratio--2x3"
			style={{
				background: `url(${poster_path}) no-repeat center center`,
				backgroundSize: 'cover'
			}}
		/>
	);
};

export default FilmPoster;
