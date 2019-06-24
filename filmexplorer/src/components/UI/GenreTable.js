import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import '../../styles/main.scss';
import { genreIDs, genres } from '../../utils/genres';

export default class GenreTable extends PureComponent {
	render() {
		return (
			// <section className="cf pt7">
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
							// color: 'red'
						}}
					>
						<GenreCard key={genreIDs.genre} genre={genres[idx]} />
					</Link>
				))}
			</section>
		);
	}
}
