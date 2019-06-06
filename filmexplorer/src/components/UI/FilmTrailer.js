import React, { PureComponent } from 'react';

export default class FilmTrailer extends PureComponent {
	//TODO must configure cors() to deal with youtube issues
	render() {
		const videos = this.props.videos;
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
	}
}
