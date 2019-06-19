import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import '../../styles/main.scss';
import { genreIDs, genres } from '../../utils/genres';

export default class GenreTable extends Component {
	render() {
		return (
			// <section className="cf pt7">
			<section className="genreTable">
				{Object.keys(genreIDs).map((genre, idx) => (
					// <article className="fl w-100-l w-50-m w-25-ns pa1 pv6-ns" key={genre}>
					<Link
						to={`/genre/${genre}`}
						key={genre}
						style={{
							margin: '25px',
							background: '#8c8c8c',
							borderRadius: '10px',
							textDecoration: 'none',
							color: '#d9d9d9'
						}}
					>
						<GenreCard
							key={genreIDs.genre}
							genre={genres[idx]}
							// activeClassName="genreContainer"
						/>
					</Link>
					// <div className="genreContainer">
					// </div>
					// <article key={genre}>
					// </article>
				))}
			</section>
		);
	}
}
