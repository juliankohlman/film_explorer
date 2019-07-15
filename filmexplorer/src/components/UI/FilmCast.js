import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//Todo accepts film.credits.cast prop and accesses: character/name/profile_path
const FilmCast = props => {
	const cast = props.cast;
	return (
		// Todo map over this.props and render out cast component then do the same for crew
		<main className="mw6 center">
			<p>{console.log(cast)}</p>
			<h1>Cast</h1>

			{/* {cast.map(castMember => ( */}
			{/* reducing results */}
			{cast.slice(0, 10).map(castMember => (
				//todo href will become links to cast/crew profile pages
				<article
					className="dt w-100 bb b--black-05 pb2 mt2"
					href="#0"
					key={castMember.id}
				>
					{/* <div className="dtc w2 w3-ns v-mid"> */}
					<div className="dtc w2 w3-ns v-mid">
						<img
							//Todo build string on server-side like crewMember
							alt="thumbnail"
							src={`https://image.tmdb.org/t/p/original${
								castMember.profile_path
							}`}
							className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
						/>
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title black mv0 white">
							Starring {castMember.name} as {castMember.character}
						</h1>
						{/* <h2 className="f6 fw4 mt0 mb0 black-60">@yg</h2> */}
					</div>
				</article>
				// <Carousel>
				// </Carousel>
			))}
		</main>
	);
};
export default FilmCast;
