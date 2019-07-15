import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const FilmCrew = props => {
	const crew = Array.from(new Set(props.crew));
	return (
		<main className="mw6 center">
			<p>{console.log(crew)}</p>
			<h1>Crew</h1>

			{/* {crew.map(crewMember => ( */}
			{/* reducing results to 5 max */}
			<Carousel showThumbs={false} showArrows={true} axis={'horizontal'}>
				{crew.map(crewMember => (
					//TODO href will become links to cast/crew profile pages
					<article
						className="dt w-100 bb b--black-05 pb2 mt2"
						href="#0"
						key={crewMember.credit_id}
					>
						<div className="dtc w2 w3-ns v-mid">
							<img
								alt="thumbnail"
								src={crewMember.profile_path}
								className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
							/>
						</div>
						<div className="dtc v-mid pl3">
							<h1 className="f6 f5-ns fw6 lh-title black mv0 white">
								{crewMember.job} - {crewMember.name}
							</h1>
						</div>
					</article>
				))}
			</Carousel>
		</main>
	);
};

export default FilmCrew;
/* Pure Component example for reference
import React, { PureComponent } from 'react';

export default class FilmCrew extends PureComponent {
	render() {
		const crew = Array.from(new Set(this.props.crew));
		return (
			<main className="mw6 center">
				<p>{console.log(crew)}</p>
				<h1>Crew</h1>

				{crew.map(crewMember => (
					//TODO href will become links to cast/crew profile pages
					<article
						className="dt w-100 bb b--black-05 pb2 mt2"
						href="#0"
						key={crewMember.credit_id}
					>
						<div className="dtc w2 w3-ns v-mid">
							<img
								alt="thumbnail"
								src={crewMember.profile_path}
								className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
							/>
						</div>
						<div className="dtc v-mid pl3">
							<h1 className="f6 f5-ns fw6 lh-title black mv0">
								{crewMember.job} - {crewMember.name}
							</h1>
							// <h2 className="f6 fw4 mt0 mb0 black-60">@yg</h2> 
						</div>
					</article>
				))}
			</main>
		);
	}
}
*/
