import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = props => {
	return (
		<div className={props.style}>
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
						// className="grow aspect-ratio--4x6"
						className="grow"
						//! Todo move this into class in filmList.scss
						style={{
							background: `url(${film.poster_path}) no-repeat center center`,
							backgroundSize: 'contain',
							// objectFit: 'contain',
							zIndex: '0',
							margin: '1.15rem'
						}}
					/>
				</Link>
			))}
		</div>
	);
};

export default FilmList;
