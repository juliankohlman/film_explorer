import React from 'react';

const FilmOverview = props => {
	const { overview } = props;
	return (
		<article className="center mw5 mw6-ns hidden ba mv4">
			<h1 className="f4 bg-near-black white mv0 pv2 ph3">Film Overview</h1>
			<div className="pa3 bt">
				<p className="f6 f5-ns lh-copy measure mv0">{overview}</p>
			</div>
		</article>
	);
};

export default FilmOverview;
