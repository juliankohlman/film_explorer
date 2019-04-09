import React, { Component } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import GenreTable from '../components/GenreTable';
import SearchFilms from '../components/SearchFilms';

//TODO need to render a back to genre button in header when in 'search mode'
export default class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			useSearch: false
		};
	}

	handleInputChange = e => {
		this.setState({
			query: e.target.value
		});
	};

	onSearch = e => {
		console.log('onSearch clicked', this.state.query);

		if (this.state.query !== '') {
			this.setState(state => ({ useSearch: !state.useSearch }));
		} else {
			alert('Must enter a film to run search');
		}
		e.preventDefault();
	};

	render() {
		console.log(this.state.useSearch);
		return (
			<Container>
				<Header>
					{/* Extract into another component??? */}
					<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<CallToAction callout="Welcome to the Film Explorer" />
					</div>
					<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<div className="white v-mid">
							<input
								type="text"
								placeholder="Film Search..."
								value={this.state.query}
								onChange={this.handleInputChange}
							/>
							<button onClick={this.onSearch}>Search</button>
						</div>
					</div>
				</Header>
				{/* If search gets run render filmSearch component */}
				{this.state.useSearch ? (
					<SearchFilms query={this.state.query} />
				) : (
					<GenreTable />
				)}
			</Container>
		);
	}
}
