import React from 'react';

//todo clean up component make it more flexible/responsive ready for FilmDetail components
const FilmPoster = props => {
	const { title, poster_path } = props;
	return (
		<div
			role="img"
			aria-label={title}
			// class="grow aspect-ratio--4x6 "
			style={{
				background: `url(${poster_path})`,
				backgroundSize: 'cover',
				width: '330px',
				height: '500px'
			}}
		/>
	);
};

export default FilmPoster;
