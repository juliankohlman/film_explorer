import React, { Component } from 'react';
import FilmList from './FilmList';
import FilmListData from './FilmListData';

class FilmPage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { films, currentPage, nextPage, lastPage, handler } = this.props;

		if (films && films.length) {
			return (
				<article style={{ paddingTop: '342px' }}>
					<FilmListData currentPage={currentPage} films={films} />

					<button onClick={lastPage}>Last page</button>
					<button onClick={handler}>Jump Page!!!</button>
					<button onClick={nextPage}>Next page</button>

					<FilmList filmList={films} />
				</article>
			);
		}
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

// const FilmPage = ({ films = [], currentPage, nextPage, lastPage }) => {
// 	if (films && films.length) {
// 		return (
// 			<article style={{ paddingTop: '342px' }}>
// 				<FilmListData currentPage={currentPage} films={films} />

// 				<button onClick={lastPage}>Last page</button>
// 				<button onClick={nextPage}>Next page</button>
// 				{/* <button onClick={jumpPage}>
// 					Jump Page:
// 					<input type="number" name="jumpPage" id="" />
// 				</button> */}
// 				<FilmList filmList={films} />
// 			</article>
// 		);
// 	}
// 	return (
// 		<div>
// 			<h2 style={{ paddingTop: '25%' }}>
// 				Looks like you've reached the end of the results for this search
// 				<button onClick={lastPage}>Last page</button>
// 			</h2>
// 		</div>
// 	);
// };

export default FilmPage;
