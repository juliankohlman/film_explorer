import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = props => {
	return (
		<div style={{ marginTop: '60px' }}>
			{props.filmList.map(film => (
				<Link
					to={`/detail/${film.id}`}
					className="fl w-50 w-25-l link overflow-hidden"
					key={film.id}
				>
					<div
						role="img"
						aria-label={film.title}
						// removed grow from below classname
						className="aspect-ratio--4x6 "
						style={{
							background: `url(${film.poster_path}) no-repeat center center`,
							backgroundSize: 'cover'
						}}
					/>
				</Link>
			))}
		</div>
	);
};

export default FilmList;
