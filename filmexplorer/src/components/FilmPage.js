import React from 'react';
import { Link } from 'react-router-dom';

const FilmPage = ({ films = [], nextPage, lastPage }) => {
	if (films.length) {
		return (
			<article style={{ paddingTop: '342px' }}>
				{/* <h4>{films[0].total_results}</h4> */}
				<button onClick={lastPage}>Last page</button>
				<button onClick={nextPage}>Next page</button>
				{films.map(film => (
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
				))}
			</article>
		);
	}
	return <div />;
};

export default FilmPage;
