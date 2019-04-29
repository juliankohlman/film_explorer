import React, { PureComponent } from 'react';

export default class FilmOverview extends PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<article class="center mw5 mw6-ns hidden ba mv4">
				<h1 class="f4 bg-near-black white mv0 pv2 ph3">Film Overview</h1>
				<div class="pa3 bt">
					<p class="f6 f5-ns lh-copy measure mv0">{this.props.overview}</p>
				</div>
			</article>
		);
	}
}
