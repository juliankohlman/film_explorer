import React, { Component } from 'react';
import Container from '../components/UI/Container';
import Header from '../components/UI/Header';
import Button from '../components/UI/Button';
import CallToAction from '../components/UI/CallToAction';
import GenreFilms from '../components/Query/GenreFilms';
import ExploreGenreFilms from '../components/Query/ExploreGenreFilms';
import { genreIDs } from '../utils/genres';

export default class Genre extends Component {
	//Todo fix explore submission handling, state not always updating on subsequent searches causing the query to be run twice to update the films

	//* May have to remove page from state here, and adjust schema separating page from user input options
	constructor(props) {
		super(props);

		this.state = {
			sort_by: 'undefined',
			year: 'undefined',
			certification: 'undefined',
			with_runtime_gte: 'undefined',
			personString: 'undefined',
			genreID: genreIDs[this.props.match.params.key].id,
			page: 1,
			runQuery: false,
			input: null
		};
	}

	handleChange = e => {
		const target = e.target;
		const name = target.name;
		const value =
			name === 'year' || name === 'with_runtime_gte'
				? +target.value
				: target.value;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		let runQuery = Object.values(this.state)
			.slice(0, 7)
			.filter(field => field !== 'undefined' || field !== '');

		console.log(`query fields with input entered by user: ${runQuery.length}`);

		if (runQuery.length >= 2) {
			this.setState(state => ({
				runQuery: !state.runQuery,
				input: Object.fromEntries(
					Object.entries(this.state)
						.slice(0, 7)
						.filter(f => f[1] !== 'undefined' || f[1] === '')
				)
			}));
		} else {
			//TODO fix how state gets updated this is not clean code
			// need to adjust state for when runQuery will not be executed and state needs to be reset
			this.setState(state => ({
				runQuery: false,
				input: {}
			}));
		}
		alert(`Options selected: ${JSON.stringify(this.state)}`);
		e.preventDefault();
	};

	render() {
		let id = this.state.genreID;
		return (
			<Container>
				{this.state.genreID !== 1 ? (
					<>
						<Header style="genreHeader">
							<CallToAction
								callout={genreIDs[this.props.match.params.key].label}
							/>
							<Button text="Home" href="/" />
						</Header>
						<form
							// className="dtc-ns tc pv4 bg-black-05 v-mid"
							className="explorerForm"
							onSubmit={this.handleSubmit}
						>
							<label style={{ color: 'white' }}>
								{/* Actor or Director: */}
								<input
									className="searchInput"
									placeholder="Actor or Director..."
									type="text"
									name="personString"
									value={this.state.value}
									onChange={this.handleChange}
								/>
							</label>

							<label style={{ color: 'white' }}>
								{/* Release Year: */}
								<input
									className="searchInput"
									placeholder="ex...1984"
									type="number"
									min="1900"
									name="year"
									value={this.state.value}
									onChange={this.handleChange}
								/>
							</label>

							<label style={{ color: 'white' }}>
								{/* Film Runtime: */}
								<input
									className="searchInput"
									placeholder="Runtime in minutes..."
									//? type number instead
									//* Review API to confirm number entered will filter for films with a longer or shorter runtime than users input
									type="text"
									name="with_runtime_gte"
									value={this.state.value}
									onChange={this.handleChange}
								/>
							</label>
							<select
								className="selectInput"
								value={this.state.value}
								onChange={this.handleChange}
								name="sort_by"
							>
								{/* rename popularity.asc and popularity.desc labels */}
								<option value="">Sort Films</option>
								{/* Rename more clearly results are asc */}
								<option value="popularity.desc">Most popular</option>
								<option value="popularity.asc">Least popular</option>
								<option value="release_date.desc">Newest Releases</option>
								<option value="release_date.asc">Oldest Releases</option>
								<option value="revenue.desc">Highest Grossing</option>
								<option value="revenue.asc">Lowest Grossing</option>
								<option value="original_title.desc">Title A-Z</option>
								<option value="original_title.asc">Title Z-A</option>
							</select>

							<select
								className="selectInput"
								value={this.state.value}
								onChange={this.handleChange}
								name="certification"
							>
								<option value="">Film Rating</option>
								<option value="G">G</option>
								<option value="PG">PG</option>
								<option value="PG-13">PG-13</option>
								<option value="R">R</option>
								<option value="NC-17">NC-17</option>
								<option value="NR">NR</option>
							</select>

							<button
								type="submit"
								className="searchButton"
								// onClick={this.handleSubmit}
							>
								Explore
							</button>
						</form>
					</>
				) : (
					<Header style="genreHeader">
						<CallToAction
							callout={genreIDs[this.props.match.params.key].label}
						/>

						<Button text="Home" href="/" />
					</Header>
				)}
				{this.state.runQuery ? (
					<ExploreGenreFilms input={this.state.input} chevron={'chevron'} />
				) : (
					<GenreFilms id={id} chevron={'chevron'} />
				)}
			</Container>
		);
	}
}
