import React, { PureComponent } from 'react';

export default class FilmOverview extends PureComponent {
	render() {
		return (
			<article className="center mw5 mw6-ns hidden ba mv4">
				<h1 className="f4 bg-near-black white mv0 pv2 ph3">Film Overview</h1>
				<div className="pa3 bt">
					<p className="f6 f5-ns lh-copy measure mv0">{this.props.overview}</p>
				</div>
			</article>
		);
	}
}
