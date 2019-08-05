import React from 'react';
import FilmList from './FilmList';

const FilmPage = props => {
	const { films, currentPage, lastPage, style } = props;

	return films && films.length > 0 ? (
		<>
			<FilmList filmList={films} current={currentPage} style={style} />
		</>
	) : (
		// Todo create a nice end-of-results error page to render in this condition
		//* May not even need this now with how pagination controls are rendered. Because when a user is viewing the last page of search results no 'next' button will be rendered
		<div style={{ background: 'blue', color: 'black' }}>
			<h2 style={{ paddingTop: '25%' }}>
				Looks like you've reached the end of the results for this search
				<button onClick={lastPage}>Last page</button>
			</h2>
		</div>
	);
};
export default FilmPage;
