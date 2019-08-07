import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const FilmCrew = props => {
	const crew = Array.from(new Set(props.crew));
	return (
		<div className="sliderContainer">
			<h1>Crew</h1>
			<Carousel
				showThumbs={true}
				showArrows={true}
				axis={'horizontal'}
				showIndicators={false}
				thumbWidth={10}
			>
				{crew.map(crewMember => (
					//TODO href will become links to cast/crew profile pages
					<article
						className="dt w-100 bb b--black-05 pb2 mt2"
						href="#0"
						key={crewMember.credit_id}
					>
						<img
							className="memberImage"
							alt="thumbnail"
							src={crewMember.profile_path}
						/>
						<div className="memberName">
							{crewMember.name} <p className="memberPop">⏤</p> {crewMember.job}
						</div>
					</article>
				))}
			</Carousel>
		</div>
	);
};

export default FilmCrew;
