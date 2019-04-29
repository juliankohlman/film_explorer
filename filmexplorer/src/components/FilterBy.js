import React, { Component } from 'react';

class FilterBy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortBy: null,
			releaseYear: null,
			rating: null,
			runtime: null
		};
	}

	handleChange = e => {
		this.setState({ value: e.target.value });
	};

	handleSubmit = e => {
		alert(`Options selected: ${this.state}`);
		e.preventDefault();
	};

	render() {
		return (
			<form
				className="dtc-ns tc pv4 bg-black-05 v-mid"
				onSubmit={this.handleSubmit}
			>
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="">Sort By</option>
					<option value="popularity.asc">Most popular</option>
					<option value="popularity.desc">Least popular</option>
					<option value="release_date.asc">Newest Releases</option>
					<option value="release_date.desc">Oldest Releases</option>
					<option value="revenue.asc">Highest Grossing</option>
					<option value="revenue.desc">Lowest Grossing</option>
					{/* <option value="primary_release_date.asc">Premiere Date</option>
						<option value="primary_release_date.desc">Premiere Date</option> */}
					<option value="original_title.asc">Title</option>
					<option value="original_title.desc">Title</option>
				</select>
				<select>
					<option value="">Release Year</option>
					<option value="popularity.asc">Popularity ⬆</option>
					<option value="popularity.desc">Popularity ⬇</option>
					<option value="release_date.asc">Release Date</option>
					<option value="release_date.desc">Release Date</option>
					<option value="revenue.asc">Box Office</option>
					<option value="revenue.desc">Box Office</option>
					<option value="original_title.asc">Title</option>
					<option value="original_title.desc">Title</option>
				</select>
				<select>
					<option value="">Film Rating</option>
					<option value="popularity.asc">Popularity ⬆</option>
					<option value="popularity.desc">Popularity ⬇</option>
					<option value="release_date.asc">Release Date</option>
					<option value="release_date.desc">Release Date</option>
					<option value="revenue.asc">Box Office</option>
					<option value="revenue.desc">Box Office</option>
					<option value="original_title.asc">Title</option>
					<option value="original_title.desc">Title</option>
				</select>
				<select>
					<option value="">Film Runtime</option>
					<option value="popularity.asc">Popularity ⬆</option>
					<option value="popularity.desc">Popularity ⬇</option>
					<option value="release_date.asc">Release Date</option>
					<option value="release_date.desc">Release Date</option>
					<option value="revenue.asc">Box Office</option>
					<option value="revenue.desc">Box Office</option>
					<option value="original_title.asc">Title</option>
					<option value="original_title.desc">Title</option>
				</select>
			</form>
		);
	}
}

export default FilterBy;
