import React from 'react';

const FilmListData = props => {
	const { currentPage, films } = props;
	return (
		<div>
			<h4>{`Page ${currentPage} of ${films[0].total_pages}`}</h4>
			<h3>{films[0].total_results} Total Films To Explore</h3>
		</div>
	);
};

export default FilmListData;
