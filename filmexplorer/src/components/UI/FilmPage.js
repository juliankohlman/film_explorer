import React, { Component } from 'react';
import FilmList from './FilmList';
import FilmListData from './FilmListData';

class FilmPage extends Component {
	render() {
		const { films, currentPage, nextPage, lastPage } = this.props;
		if (films && films.length) {
			return (
				<article style={{ paddingTop: '342px' }}>
					<FilmListData currentPage={currentPage} films={films} />

					{currentPage > 1 && currentPage < films[0].total_pages ? (
						<>
							<button onClick={lastPage}>Last page</button>{' '}
							<button onClick={nextPage}>Next page</button>{' '}
						</>
					) : (
						<button onClick={nextPage}>Next page</button>
					)}
					<FilmList filmList={films} />
				</article>
			);
		}
		// Todo create a nice end-of-results error page to render in this condition
		return (
			<div>
				<h2 style={{ paddingTop: '25%' }}>
					Looks like you've reached the end of the results for this search
					<button onClick={lastPage}>Last page</button>
				</h2>
			</div>
		);
	}
}
export default FilmPage;
