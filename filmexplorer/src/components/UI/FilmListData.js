import React from 'react';

export default function FilmListData(props) {
	return (
		<div>
			<h4>{`Page ${props.currentPage} of ${props.films[0].total_pages}`}</h4>
			<h3>{props.films[0].total_results} Total Films To Explore</h3>
		</div>
	);
}
