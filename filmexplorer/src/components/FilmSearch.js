import React, { Component } from 'react';

export default class FilmSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			queryString: ''
		};
	}

	render() {
		return (
			<div className="white v-mid">
				<form>
					<label>
						Film Search:
						<input type="text" placeholder="Film Search..." />
					</label>
				</form>
			</div>
		);
	}
}
