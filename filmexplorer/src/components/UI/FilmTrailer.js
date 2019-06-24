import React from 'react';
//TODO must configure cors() to deal with youtube issues

const FilmTrailer = props => {
	const videos = props.videos;
	return videos.map(video => {
		return (
			<iframe
				title={video.name}
				key={video.id}
				src={`//www.youtube.com/embed/${video.key}`}
				alt={video.type}
			/>
		);
	});
};

export default FilmTrailer;
