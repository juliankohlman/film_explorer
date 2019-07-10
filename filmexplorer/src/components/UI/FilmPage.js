import React from 'react';
import FilmList from './FilmList';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const FilmPage = props => {
	const { films, currentPage, nextPage, lastPage } = props;

	return films && films.length ? (
		<>
			<div className="pageControls">
				{/* Pagination logic, current page determines what ui buttons to render */}
				{currentPage > 1 && currentPage < films[0].total_pages ? (
					<>
						<MdChevronLeft onClick={lastPage} className="chevron" />

						<MdChevronRight onClick={nextPage} className="chevron" />
					</>
				) : currentPage === films[0].total_pages ? (
					<MdChevronLeft onClick={lastPage} className="chevron" />
				) : (
					<MdChevronRight onClick={nextPage} className="chevron" />
				)}
			</div>
			<FilmList
				filmList={films}
				current={currentPage}
				next={nextPage}
				last={lastPage}
			/>
		</>
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
