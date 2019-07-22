import React, { Component } from 'react';
import Container from '../components/UI/Container';
import Header from '../components/UI/Header';
// import CallToAction from '../components/UI/CallToAction';
import GenreTable from '../components/UI/GenreTable';
import SearchFilms from '../components/Query/SearchFilms';
// import Button from '../components/UI/Button';
import { GoSearch } from 'react-icons/go';

// const logo = require('../images/logo.png');

//TODO need to render a back to genre button in header when in 'search mode'
export default class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			useSearch: false,
			inputEntered: false
		};
	}

	handleInputChange = e => {
		this.setState({
			query: e.target.value,
			inputEntered: !!e.target.value
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
		// console.log(this.state.useSearch);
		return (
			<Container>
				<Header style={`searchHeader`}>
					<header className="headerWelcome">
						Welcome to the Film Explorer
					</header>

					<form onSubmit={this.onSearch} className="searchForm">
						<input
							className="searchInput"
							type="text"
							placeholder="e.g. The Thing"
							value={this.state.query}
							onChange={this.handleInputChange}
						/>
						<button className="searchButton" type="submit">
							<GoSearch
								style={{
									// padding: '0 7px',
									// padding: '5px',
									color: 'white',
									verticalAlign: 'middle'
								}}
							/>
						</button>
					</form>
				</Header>

				{/* If search occurs then render the filmSearch component */}
				{this.state.useSearch && this.state.inputEntered ? (
					<SearchFilms
						query={this.state.query}
						controls={'searchControls'}
						chevron={'searchChevron'}
						currentPage={'currentPage'}
						nextPage={'nextPage'}
						lastPage={'lastPage'}
					/>
				) : (
					<GenreTable />
				)}
			</Container>
		);
	}
}
