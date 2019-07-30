import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// todo href will become links to cast/crew profile page
const FilmCast = props => {
	const cast = props.cast;
	return (
		<div className="sliderContainer">
			<h1>Cast</h1>
			<Carousel
				showThumbs={true}
				showArrows={true}
				axis={'horizontal'}
				showIndicators={false}
				thumbWidth={10}
			>
				{cast.map(castMember => (
					<article
						className="dt w-100 bb b--black-05 pb2 mt2"
						href="#0"
						key={castMember.id}
					>
						<img
							//Todo build string on server-side like crewMember
							className="memberImage"
							alt="thumbnail"
							src={castMember.profile_path}
						/>
						<div className="memberName">
							{castMember.name} <p className="memberPop">as</p>
							{castMember.character}
						</div>
					</article>
				))}
			</Carousel>
		</div>
	);
};
export default FilmCast;
