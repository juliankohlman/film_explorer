import React from 'react';

const FilmMetaData = props => {
	const {
		revenue,
		budget,
		runtime,
		status,
		tagline,
		release_date,
		similar,
		recommendation,
		title
	} = props;
	return (
		<div>
			<ul>
				<li>Revenue: {revenue}</li>
				<li>Budget: {budget}</li>
				<li>Runtime: {runtime}</li>
				<li>Status: {status}</li>
				<li>Tagline: {tagline}</li>
				{/* Look into more readable date format */}
				<li>Release Date: {release_date}</li>
				<li>
					Similar:{' '}
					{similar.length ? similar[0].title : 'No similar films found'}
				</li>
				<li>
					{/* Todo must iterate over similar and recommended films array and render USE seperate component(s) */}
					{/* Check for existence of recommendations if so render out list otherwise render message */}
					Recommendation:{' '}
					{recommendation
						? recommendation[0].title
						: 'No current Recommendations'}
				</li>
			</ul>
		</div>
	);
};

export default FilmMetaData;
