import React, { PureComponent } from 'react';

export default class FilmOverview extends PureComponent {
	render() {
		return (
			<article class="center mw5 mw6-ns hidden ba mv4">
				<h1 class="f4 bg-near-black white mv0 pv2 ph3">Overview</h1>
				<div class="pa3 bt">
					<p class="f6 f5-ns lh-copy measure mv0">
						The epic saga continues as Luke Skywalker, in hopes of defeating the
						evil Galactic Empire, learns the ways of the Jedi from aging master
						Yoda. But Darth Vader is more determined than ever to capture Luke.
						Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca,
						and droids C-3PO and R2-D2 are thrown into various stages of
						capture, betrayal and despair."
					</p>
				</div>
			</article>
		);
	}
}
