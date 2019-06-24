import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = props => {
	return (
		<div>
			{props.filmList.map(film => (
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
		</div>
	);
};

export default FilmList;
