import React, { PureComponent } from 'react';

//Todo accepts film.credits.cast prop and accesses: character/name/profile_path
export default class FilmCredits extends PureComponent {
	render() {
		return (
			<main className="mw6 center">
				<p>{this.props.credits}</p>
				<h1>Cast or Crew</h1>
				<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
					<div className="dtc w2 w3-ns v-mid">
						<img
							alt="thumbnail"
							src="http://mrmrs.github.io/photos/p/2.jpg"
							className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
						/>
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">Young Gatchell </h1>
						<h2 className="f6 fw4 mt0 mb0 black-60">@yg</h2>
					</div>
				</article>
				<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
					<div className="dtc w2 w3-ns v-mid">
						<img
							alt="thumbnail"
							src="http://mrmrs.github.io/photos/p/3.jpg"
							className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
						/>
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">Arnoldo Degraff</h1>
						<h2 className="f6 fw4 mt0 mb0 black-60">@99xx88randomhandle</h2>
					</div>
				</article>
				<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
					<div className="dtc w2 w3-ns v-mid">
						<img
							alt="thumbnail"
							src="http://mrmrs.github.io/photos/p/4.jpg"
							className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
						/>
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">
							Deirdre Lachance
						</h1>
						<h2 className="f6 fw4 mt0 mb0 black-60">@favfavfav</h2>
					</div>
				</article>
				<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
					<div className="dtc w2 w3-ns v-mid">
						<img
							alt="thumbnail"
							src="http://mrmrs.github.io/photos/p/5.jpg"
							className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
						/>
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">
							Frederic Starner
						</h1>
						<h2 className="f6 fw4 mt0 mb0 black-60">@hungryhippofanatic</h2>
					</div>
				</article>
				<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
					<div className="dtc w2 w3-ns v-mid">
						<img
							alt="thumbnail"
							src="http://mrmrs.github.io/photos/p/6.jpg"
							className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
						/>
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">
							Cleveland Ridout
						</h1>
						<h2 className="f6 fw4 mt0 mb0 black-60">@purethinking</h2>
					</div>
				</article>
				<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
					<div className="dtc w2 w3-ns v-mid">
						<img
							alt="thumbnail"
							src="http://mrmrs.github.io/photos/p/7.jpg"
							className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
						/>
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">Leticia Fearon</h1>
						<h2 className="f6 fw4 mt0 mb0 black-60">@retrofeels</h2>
					</div>
				</article>
				<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
					<div className="dtc w2 w3-ns v-mid">
						<img
							alt="thumbnail"
							src="http://mrmrs.github.io/photos/p/10.jpg"
							className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
						/>
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">Ahmad Backer</h1>
						<h2 className="f6 fw4 mt0 mb0 black-60">@ahmadBB</h2>
					</div>
				</article>
				<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
					<div className="dtc w2 w3-ns v-mid">
						<img
							alt="thumbnail"
							src="http://mrmrs.github.io/photos/p/11.jpg"
							className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
						/>
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">Carlie Noakes</h1>
						<h2 className="f6 fw4 mt0 mb0 black-60">@carnoakes99</h2>
					</div>
					<div className="dtc v-mid" />
				</article>
			</main>
		);
	}
}
