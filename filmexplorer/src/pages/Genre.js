import React, { Component } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Button from '../components/Button';
import CallToAction from '../components/CallToAction';
import GenreFilms from '../components/GenreFilms';
import ExploreGenreFilms from '../components/ExploreGenreFilms';
import { genreIDs } from '../utils/genres';

export default class Genre extends Component {
	//todo Add state here for explore options that will get passed into GenreExplore component. Conditionally render based on presence of input in any of the fields => Sort, Release Year, Rating, Runtime, Actor/Director
	constructor(props) {
		super(props);
		// set a flag variable exploreQuery to false and toggle it to true once a field gets set. then conditionally render based on that value.
		this.state = {
			sort_by: 'undefined',
			year: 'undefined',
			certification: 'undefined',
			with_runtime_gte: 'undefined',
			personString: 'undefined',
			genreID: genreIDs[this.props.match.params.key].id,
			runQuery: false,
			input: null
		};
	}

	handleChange = e => {
		const target = e.target;
		const name = target.name;
		const value = name === 'year' ? +target.value : target.value;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		// let runQuery = Object.values(this.state)
		// 	.slice(0, 5)
		//   .every(field => field === '');

		let runQuery = Object.values(this.state)
			.slice(0, 6)
			.filter(field => field !== 'undefined');

		// if true don't run query.. if false run query
		// console.log(Object.fromEntries(Object.entries(this.state).slice(0, 6)));
		// console.log(runQuery.every(field => field === ''));
		console.log(`query fields with input entered by user: ${runQuery.length}`);
		// console.log(
		// 	Object.fromEntries(
		// 		Object.entries(this.state)
		// 			.slice(0, 6)
		// 			.filter(f => f[1] !== 'undefined')
		// 	)
		// );
		if (runQuery.length >= 2) {
			this.setState(state => ({
				runQuery: !state.runQuery,
				input: Object.fromEntries(
					Object.entries(this.state)
						.slice(0, 6)
						.filter(f => f[1] !== 'undefined' || f[1] === '')
				)
			}));
		} else {
			this.setState(state => ({
				runQuery: false,
				input: {}
			}));
		}
		// need to adjust state for when runQuery will not be executed and state needs to be reset
		alert(`Options selected: ${JSON.stringify(this.state)}`);
		e.preventDefault();
	};

	render() {
		return (
			<Container>
				<Header>
					<CallToAction callout={genreIDs[this.props.match.params.key].label} />
					<form
						className="dtc-ns tc pv4 bg-black-05 v-mid"
						onSubmit={this.handleSubmit}
					>
						<select
							value={this.state.value}
							onChange={this.handleChange}
							name="sort_by"
						>
							<option value="">Sort Films</option>
							<option value="popularity.asc">Most popular</option>
							<option value="popularity.desc">Least popular</option>
							<option value="release_date.asc">Newest Releases</option>
							<option value="release_date.desc">Oldest Releases</option>
							<option value="revenue.asc">Highest Grossing</option>
							<option value="revenue.desc">Lowest Grossing</option>
							<option value="original_title.asc">Title A-Z</option>
							<option value="original_title.desc">Title Z-A</option>
						</select>

						<label style={{ color: 'white' }}>
							Release Year:
							<input
								placeholder="ex...1984"
								type="number"
								name="year"
								value={this.state.value}
								onChange={this.handleChange}
							/>
						</label>

						<select
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

						<label style={{ color: 'white' }}>
							Film Runtime:
							<input
								placeholder="Runtime in minutes..."
								type="text"
								name="with_runtime_gte"
								value={this.state.value}
								onChange={this.handleChange}
							/>
						</label>

						<label style={{ color: 'white' }}>
							Actor or Director:
							<input
								placeholder="Actor or Director..."
								type="text"
								name="personString"
								value={this.state.value}
								onChange={this.handleChange}
							/>
						</label>
						<button
							className="dtc-ns tc bg-black-05"
							onClick={this.handleSubmit}
						>
							<a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue">
								Explore
							</a>
						</button>
					</form>
					<Button text="Home" />
				</Header>
				{/* If explore options are empty render GenreFilms if an option is present render ExploreFilms component */}
				{/* Component is mounting b/f the id is there */}
				{/* Todo copy needed state props and pass to query as a single object */}
				{/* if runQuery && <ExploreGenreFilms input={this.state.input} /> */}
				{/* {console.log(this.state.input)} */}
				{this.state.runQuery && <ExploreGenreFilms input={this.state.input} />}
				<GenreFilms id={this.state.genreID} />
			</Container>
		);
	}
}
