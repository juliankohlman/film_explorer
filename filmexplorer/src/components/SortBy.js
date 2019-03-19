import React, { Component } from 'react';

class SortBy extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { value: 'popularity.asc' };
	// }

	// handleChange = e => {
	// 	this.setState({ value: e.target.value });
	// };

	// handleSubmit = e => {
	// 	alert(`You're sorting the data by: ${this.state.value}`);
	// 	e.preventDefault();
	// };
	render() {
		return (
			// <form onSubmit={this.handleSubmit}>
			<form className="dtc-ns tc pv4 bg-black-05 v-mid">
				<select
				// placeholder="Sort by"
				// value={this.state.value}
				// onChange={this.handleChange}
				>
					<option value="">Sort By</option>
					<option value="popularity.asc">Popularity ⬆</option>
					<option value="popularity.desc">Popularity ⬇</option>
					<option value="release_date.asc">Release Date</option>
					<option value="release_date.desc">Release Date</option>
					<option value="revenue.asc">Box Office</option>
					<option value="revenue.desc">Box Office</option>
					{/* <option value="primary_release_date.asc">Premiere Date</option>
						<option value="primary_release_date.desc">Premiere Date</option> */}
					<option value="original_title.asc">Title</option>
					<option value="original_title.desc">Title</option>
				</select>

				{/* <input type="submit" value="Sort now" /> */}
			</form>
		);
	}
}

export default SortBy;
