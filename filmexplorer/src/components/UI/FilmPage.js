import React from 'react';
import FilmList from './FilmList';

const FilmPage = props => {
	const { films, currentPage, nextPage, lastPage } = props;

	return films && films.length ? (
		<div style={{ marginTop: '270px' }}>
			{/* Pagination logic, current page determines what ui buttons to render */}
			{currentPage > 1 && currentPage < films[0].total_pages ? (
				<>
					<button onClick={lastPage}>Last page</button>{' '}
					<button onClick={nextPage}>Next page</button>{' '}
				</>
			) : currentPage === films[0].total_pages ? (
				<button onClick={lastPage}>Last page</button>
			) : (
				<button onClick={nextPage}>Next page</button>
			)}
			<FilmList filmList={films} />
		</div>
	) : (
		// Todo create a nice end-of-results error page to render in this condition
		<div>
			<h2 style={{ paddingTop: '25%' }}>
				Looks like you've reached the end of the results for this search
				<button onClick={lastPage}>Last page</button>
			</h2>
		</div>
	);
};
export default FilmPage;
