import React from 'react';

//todo clean up component make it more flexible/responsive ready for FilmDetail components
const FilmPoster = props => {
	const { title, poster_path } = props;
	return (
		<div
			// className="detailPoster"
			role="img"
			aria-label={title}
			// class="grow aspect-ratio--4x6 "
			style={{
				background: `url(${poster_path}) no-repeat center center`,
				backgroundSize: 'cover',
				width: '350px',
				height: '500px'
			}}
		/>
	);
};

export default FilmPoster;
