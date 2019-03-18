import React, { Component } from 'react';
import Header from './Header';
import GenreTable from './GenreTable';

export default class Container extends Component {
	render() {
		return (
			<div>
				<Header />

				<GenreTable />
			</div>
		);
	}
}
