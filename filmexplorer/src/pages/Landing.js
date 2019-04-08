import React, { Component } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
// import FilmSearch from '../components/FilmSearch';
import GenreTable from '../components/GenreTable';

export default class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			useSearch: false
		};
	}

	handleInputChange = e => {};

	onSearch = e => {};

	render() {
		return (
			<Container>
				<Header>
					<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<CallToAction callout="Welcome to the Film Explorer" />
					</div>
					<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<div className="white v-mid">
							{/* <label>Film Search:</label> */}
							<input
								type="text"
								placeholder="Film Search..."
								value={this.state.query}
							/>
							<button onClick={this.onSearch}>Search</button>
						</div>
					</div>
				</Header>
				{/* If search gets run render filmSearch component */}
				<GenreTable />
			</Container>
		);
	}
}
