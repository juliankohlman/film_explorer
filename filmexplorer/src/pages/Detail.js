import React, { Component } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import FilmBackdrop from '../components/FilmBackdrop';
import Button from '../components/Button';
import FilmPoster from '../components/FilmPoster';
import FilmOverview from '../components/FilmOverview';
import FilmCast from '../components/FilmCast';
import FilmCrew from '../components/FilmCrew';
import { GET_FILM_DETAILS } from '../queries/getFilmDetails';
import { Query, graphql } from 'react-apollo';
import FilmTrailer from '../components/FilmTrailer';

class Detail extends Component {
	render() {
		const Details = () => (
			<Query
				query={GET_FILM_DETAILS}
				variables={{ filmID: +this.props.match.params.id }}
			>
				{({ loading, error, data }) => {
					if (loading) return <p>loading...</p>;
					if (error) return <p>error :(</p>;
					// console.log(data.getFilmDetails);

					return (
						<Container>
							{console.log(this.props)}

							<Header>
								<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
									<CallToAction callout="The Film Explorer" />
								</div>
								<Button text="Home" href="/" />
								<button onClick={this.props.history.goBack}>
									BACK TO GENRE
								</button>
								{/* <Button text="Back to Genre" href="" />
								 */}
							</Header>
							<div style={{ paddingTop: '274px' }}>
								<FilmBackdrop
									backdrop_path={data.getFilmDetails.backdrop_path}
								/>
							</div>
							<FilmPoster
								poster_path={data.getFilmDetails.poster_path}
								title={data.getFilmDetails.title}
							/>
							<FilmOverview overview={data.getFilmDetails.overview} />
							<FilmCast cast={data.getFilmDetails.cast} />
							{/* Create new component for crew */}
							<FilmCrew crew={data.getFilmDetails.crew} />
							<ul>
								<li>Revenue: {data.getFilmDetails.revenue}</li>
								<li>Budget: {data.getFilmDetails.budget}</li>
								<li>Runtime: {data.getFilmDetails.runtime}</li>
								<li>Status: {data.getFilmDetails.status}</li>
								<li>Tagline: {data.getFilmDetails.tagline}</li>
								<li>
									Similar:{' '}
									{data.getFilmDetails.similar.length
										? data.getFilmDetails.similar[0].title
										: 'No similar films found'}
								</li>
								<li>
									{/* Todo must iterate over similar and recommended films array and render USE seperate component(s) */}
									{/* Check for existence of recommendations if so render out list otherwise render message */}
									Recommendation:{' '}
									{data.getFilmDetails.recommendation
										? data.getFilmDetails.recommendation[0].title
										: 'No current Recommendations'}
								</li>
							</ul>
							<FilmTrailer videos={data.getFilmDetails.videos} />
						</Container>
					);
				}}
			</Query>
		);
		return <Details />;
	}
}

export default graphql(GET_FILM_DETAILS)(Detail);
