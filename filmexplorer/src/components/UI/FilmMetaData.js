import React from 'react';

const FilmMetaData = props => {
	const {
		revenue,
		budget,
		runtime,
		status,

		release_date,
		similar,
		recommendations
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
				<label className="metaLabel">Similar:</label> {similar || 'Not found'}
			</li>
			<li>
				<label className="metaLabel">Recommendations:</label>{' '}
				{recommendations || 'Not found'}
			</li>
		</ul>
	);
};

export default FilmMetaData;
