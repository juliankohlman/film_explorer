import React from 'react';
import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import '../../styles/main.scss';
import { genreIDs, genres } from '../../utils/genres';

export default function GenreTable() {
	return (
		<section className="genreTable">
			{Object.keys(genreIDs).map((genre, idx) => (
				<Link
					to={`/genre/${genre}`}
					key={genre}
					style={{
						margin: '25px',
						background: '#fff',
						borderRadius: '10px',
						textDecoration: 'none'
					}}
				>
					<GenreCard key={genreIDs.genre} genre={genres[idx]} />
				</Link>
			))}
		</section>
	);
}
