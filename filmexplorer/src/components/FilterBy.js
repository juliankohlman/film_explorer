import React, { Component } from 'react';

class FilterBy extends Component {
	render() {
		this.state = {};
		return (
			// <form onSubmit={this.handleSubmit}>
			<form className="dtc-ns tc pv4 bg-black-05 v-mid">
				<select>
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
