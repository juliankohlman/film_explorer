import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//Todo accepts film.credits.cast prop and accesses: character/name/profile_path
const FilmCast = props => {
	const cast = props.cast;
	return (
		// Todo map over this.props and render out cast component then do the same for crew
		// <main className="mw6 center">
		<div className="sliderContainer">
			<p>{console.log(cast)}</p>
			<h1>Cast</h1>
			{/* {cast.map(castMember => ( */}
			{/* reducing results */}
			{/* todo href will become links to cast/crew profile page */}
			<Carousel showThumbs={true} showArrows={true} axis={'horizontal'}>
				{cast.map(castMember => (
					<article
						className="dt w-100 bb b--black-05 pb2 mt2"
						href="#0"
						key={castMember.id}
					>
						<img
							//Todo build string on server-side like crewMember
							alt="thumbnail"
							src={`https://image.tmdb.org/t/p/original${
								castMember.profile_path
							}`}
							className="memberImage"
							// style={{ width: '200px', height: '250px' }}
							// className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
						/>
						<div className="memberName">
							{castMember.name} <p className="memberPop">as</p>{' '}
							{castMember.character}
						</div>
					</article>
				))}
			</Carousel>
		</div>
	);
};
export default FilmCast;
