import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { GET_GENRE } from '../queries/getGenre';

class GenreFilms extends Component {
	constructor(props) {
		super(props);
	}
	// need to pull needed query id from props.
	// const id = this.props.id;
	// const genre = this.props.genre;
	// console.log(this.props.data);
	// const id = genreIDs[`${this.props.match.params.key}`]
	render() {
		const genreID = this.props.id;
		console.log(genreID);

		// console.log(this.props.match.params.key);
		// return <p>GENRE FILMS HERE</p>;
		const GenrePosters = ({ genreID }) => (
			<Query query={GET_GENRE} variables={{ genreID: this.props.id }}>
				{({ loading, error, data }) => {
					console.log(genreID);

					if (loading) return <p>loading...</p>;
					if (error) return <p>error :(</p>;
					console.log(data.getGenre);
					return (
						<div>
							<img src={`${data.getGenre.poster_path}`} alt="poster" />
						</div>
					);
				}}
			</Query>
		);
		return <GenrePosters />;
	}
}

// export default GenreFilms;
export default graphql(GET_GENRE)(GenreFilms);
