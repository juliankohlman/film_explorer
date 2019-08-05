import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import GenreCard from './GenreCard';
import '../../styles/main.scss';
import { genreIDs, genres } from '../../utils/genres';
import { GET_GENRE } from '../../queries/getGenre';
import { ApolloConsumer } from 'react-apollo';

class GenreTable extends Component {
	// TODO add query component HERE!!!!
	state = {
		genre: null,
		page: 1
	};

	onGenreFetched = genre => this.setState(() => ({ genre }));
	render() {
		return (
			<ApolloConsumer>
				{client => (
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
								// ref={genreIDs[genre]['id']}
								onClick={async () => {
									const { data } = await client.query({
										query: GET_GENRE,
										variables: {
											genreID: genreIDs[genre].id,
											page: this.state.page
										}
									});
									this.onGenreFetched(data.getGenre);
								}}
								//Todo ADD ONCLICK HERE!!!!
							>
								<GenreCard key={genreIDs.genre} genre={genres[idx]} />
							</Link>
						))}
					</section>
				)}
			</ApolloConsumer>
		);
	}
}

/**
 * 	<section className="genreTable">
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
 */

export default graphql(GET_GENRE)(GenreTable);
