import React, { Component } from 'react';

class FilterBy extends Component {
	constructor(props) {
		super(props);
		// add key that holds props for input query
		// then you can check if Object.values has any null values
		// to render explore component or genre component
		// or set a flag variable exploreQuery to false and toggle it to true once a field gets set. then conditionally render based on that value.
		this.state = {
			sort_by: null,
			year: null,
			certification: null,
			with_runtime_gte: null,
			personString: null
		};
	}

	handleChange = e => {
		const target = e.target;
		const name = target.name;

		this.setState({ [name]: target.value });
	};

	handleSubmit = e => {
		alert(`Options selected: ${JSON.stringify(this.state)}`);
		e.preventDefault();
	};

	render() {
		return (
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
						type="text"
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
				<button className="dtc-ns tc bg-black-05">
					<a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue">
						Explore
					</a>
				</button>
			</form>
		);
	}
}

export default FilterBy;
