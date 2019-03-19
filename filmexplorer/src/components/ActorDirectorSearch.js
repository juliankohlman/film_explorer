import React, { Component } from 'react';

export default class ActorSearch extends Component {
	render() {
		return (
			<div className="ph3 dtc-ns tc pv4 bg-black-05 v-mid white">
				<form>
					<label>
						Actor or Director:
						<input type="text" placeholder="Actor or Director..." />
					</label>
				</form>
			</div>
		);
	}
}
