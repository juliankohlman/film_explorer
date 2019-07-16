import React from 'react';

const FilmMetaData = props => {
	const {
		revenue,
		budget,
		runtime,
		status,

		release_date,
		similar,
		recommendation
	} = props;
	return (
		<ul className="metaData">
			<li>
				<label className="metaLabel">Revenue:</label> {revenue}
			</li>
			<li>
				<label className="metaLabel">Budget:</label> {budget}
			</li>
			<li>
				<label className="metaLabel">Runtime:</label> {runtime}
			</li>
			<li>
				<label className="metaLabel">Status:</label> {status}
			</li>
			{/* Look into more readable date format */}
			<li>
				<label className="metaLabel">Release Date:</label> {release_date}
			</li>
			<li>
				<label className="metaLabel">Similar:</label>
				{similar.length ? similar[0].title : 'No similar films found'}
			</li>
			<li>
				{/* Todo must iterate over similar and recommended films array and render USE seperate component(s) */}
				{/* Check for existence of recommendations if so render out list otherwise render message */}
				<label className="metaLabel">Recommendations:</label>
				{recommendation
					? recommendation[0].title
					: 'No current Recommendations'}
			</li>
		</ul>
	);
};

export default FilmMetaData;
