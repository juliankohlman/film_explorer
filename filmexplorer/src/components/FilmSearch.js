import React, { Component } from 'react';

export default class FilmSearch extends Component {
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
