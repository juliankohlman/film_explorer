import React from 'react';
import FilmList from './FilmList';
import FilmListData from './FilmListData';

// import { Link } from 'react-router-dom';

const FilmPage = ({ films = [], currentPage, nextPage, lastPage }) => {
	if (films && films.length) {
		return (
			<article style={{ paddingTop: '342px' }}>
				<FilmListData currentPage={currentPage} films={films} />
				{/* <h4>{`Page ${currentPage} of ${films[0].total_pages}`}</h4>
				<h3>{films[0].total_results} Total Films To Explore</h3> */}
				<button onClick={lastPage}>Last page</button>
				<button onClick={nextPage}>Next page</button>
				{/* <button onClick={jumpPage}>
					Jump Page:
					<input type="number" name="jumpPage" id="" />
				</button> */}
				<FilmList filmList={films} />
				{/* {films.map(film => (
					<Link
						to={`/detail/${film.id}`}
						className="fl w-50 w-25-l link overflow-hidden"
						key={film.id}
					>
						<div
							role="img"
							aria-label={film.title}
							className="grow aspect-ratio--4x6 "
							style={{
								background: `url(${film.poster_path}) no-repeat center center`,
								backgroundSize: 'cover'
							}}
						/>
					</Link>
				))} */}
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
};

export default FilmPage;
