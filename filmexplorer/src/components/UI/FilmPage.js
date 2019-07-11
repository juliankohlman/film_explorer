import React from 'react';
import FilmList from './FilmList';

const FilmPage = props => {
	const { films, currentPage, lastPage } = props;

	return films && films.length ? (
		<>
			{/* Pagination logic, current page determines what ui buttons to render */}
			{/* <div className={controls}>
				{currentPage > 1 && currentPage < films[0].total_pages ? (
					<>
						<MdChevronLeft onClick={lastPage} className={chevron} />

						<MdChevronRight onClick={nextPage} className={chevron} />
					</>
				) : currentPage === films[0].total_pages ? (
					<MdChevronLeft onClick={lastPage} className={chevron} />
				) : (
					<MdChevronRight onClick={nextPage} className={chevron} />
				)}
			</div> */}
			<FilmList
				filmList={films}
				// This component now only needs the films
				current={currentPage}
				// next={nextPage}
				// last={lastPage}
			/>
		</>
	) : (
		// Todo create a nice end-of-results error page to render in this condition
		//* May not even need this now with how pagination controls are rendered. Because when a user is viewing the last page of search results no 'next' button will be rendered
		<div>
			<h2 style={{ paddingTop: '25%' }}>
				Looks like you've reached the end of the results for this search
				<button onClick={lastPage}>Last page</button>
			</h2>
		</div>
	);
};
export default FilmPage;
