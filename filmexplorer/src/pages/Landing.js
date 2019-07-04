import React, { Component } from 'react';
import Container from '../components/UI/Container';
import Header from '../components/UI/Header';
import CallToAction from '../components/UI/CallToAction';
import GenreTable from '../components/UI/GenreTable';
import SearchFilms from '../components/Query/SearchFilms';
// import Button from '../components/UI/Button';

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
				<Header>
					{/* Extract into another component??? */}
					<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<CallToAction callout="Welcome to the Film Explorer" />
					</div>
					<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
						<div className="white v-mid">
							<form onSubmit={this.onSearch}>
								<input
									type="text"
									placeholder="Film Search..."
									value={this.state.query}
									onChange={this.handleInputChange}
									// Todo create classname for search input and button
									style={{
										borderTopLeftRadius: '80rem',
										borderBottomLeftRadius: '80rem',
										border: 'none',
										padding: '8px',
										fontFamily: 'Menlo',
										outline: 'none'
									}}
								/>
								<button
									type="submit"
									// Todo create classname for search input and button
									style={{
										background: '#fff',
										borderTopRightRadius: '80rem',
										borderBottomRightRadius: '80rem',
										border: 'none',
										padding: '8px'
									}}
								>
									{' '}
									<span>🔎</span>
								</button>
								{/* <button type="submit">Search 🔎</button> */}
							</form>
						</div>
						{/* No need for this now that 'home page will render if search field is cleared' */}
						{/* {this.state.useSearch ? <Button text="Home" href="/" /> : null} */}
					</div>
				</Header>

				{/* If search occurs then render the filmSearch component */}
				{this.state.useSearch && this.state.inputEntered ? (
					<SearchFilms query={this.state.query} />
				) : (
					<GenreTable />
				)}
			</Container>
		);
	}
}
