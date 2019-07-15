import React, { Component } from 'react';
import Container from '../components/UI/Container';
import Header from '../components/UI/Header';
// import CallToAction from '../components/UI/CallToAction';
import FilmBackdrop from '../components/UI/FilmBackdrop';
// import Button from '../components/UI/Button';
import FilmPoster from '../components/UI/FilmPoster';
import FilmOverview from '../components/UI/FilmOverview';
import FilmCast from '../components/UI/FilmCast';
import FilmCrew from '../components/UI/FilmCrew';
import { GET_FILM_DETAILS } from '../queries/getFilmDetails';
import { Query, graphql } from 'react-apollo';
import FilmTrailer from '../components/UI/FilmTrailer';
import FilmMetaData from '../components/UI/FilmMetaData';

class Details extends Component {
	render() {
		const Details = () => (
			<Query
				query={GET_FILM_DETAILS}
				variables={{ filmID: +this.props.match.params.id }}
			>
				{({ loading, error, data }) => {
					if (loading) return <p>loading...</p>;
					if (error) return <p>error :(</p>;
					console.log(data.getFilmDetails);
					//Todo Back to search results if user reached the detail page via a search query
					return (
						<Container>
							{console.log(this.props)}

							<Header style={`header`}>
								<div className="ctaMessage">
									{/* {data.getFilmDetails.title} */}
									<span className="genrePop">
										{data.getFilmDetails.tagline}
									</span>
								</div>
								{/* Conditional render here: if user got here via a search on landing button should say back to genre(S)/ if user got here via a genre selection go back to genre */}
								<button
									onClick={this.props.history.goBack}
									style={{
										// padding: '2px',
										alignSelf: 'center',
										height: '35px',
										fontSize: '10px',
										// width: '9%',
										background: 'red',
										color: 'white',
										fontFamily: 'lato',
										borderRadius: '.65rem',
										margin: '0'
										// lineHeight: '3px'
									}}
								>
									BACK TO GENRE
								</button>
							</Header>
							<FilmBackdrop
								backdrop_path={data.getFilmDetails.backdrop_path}
								title={data.getFilmDetails.title}
							/>
							<div className="detailContainer">
								<div>
									{/* <h3>Film Overview</h3> */}
									<h2 style={{ marginTop: '0px' }}>
										{data.getFilmDetails.title} (
										{data.getFilmDetails.release_date.split('-')[0]})
									</h2>
									<p>{data.getFilmDetails.overview}</p>
									{/* <FilmTrailer videos={data.getFilmDetails.videos} /> */}
								</div>
								<FilmPoster
									poster_path={data.getFilmDetails.poster_path}
									title={data.getFilmDetails.title}
								/>
								<div style={{ marginLeft: '10px' }}>
									{/* <h2 style={{ marginTop: '0px' }}>
										{data.getFilmDetails.title} (
										{data.getFilmDetails.release_date.split('-')[0]})
									</h2> */}
									<FilmTrailer videos={data.getFilmDetails.videos} />
									<FilmMetaData
										revenue={data.getFilmDetails.revenue}
										budget={data.getFilmDetails.budget}
										runtime={data.getFilmDetails.runtime}
										status={data.getFilmDetails.status}
										tagline={data.getFilmDetails.tagline}
										release_date={data.getFilmDetails.release_date}
										similar={
											data.getFilmDetails.similar.length
												? data.getFilmDetails.similar[0].title
												: 'No similar films found'
										}
										recommendation={
											data.getFilmDetails.recommendation
												? data.getFilmDetails.recommendation[0].title
												: 'No current Recommendations'
										}
									/>
								</div>

								{/* <FilmOverview overview={data.getFilmDetails.overview} /> */}
								{/* Create new component for crew */}
								{/* Look into more readable date format */}
								<FilmCast cast={data.getFilmDetails.cast} />

								<FilmCrew crew={data.getFilmDetails.crew} />
							</div>
						</Container>
					);
				}}
			</Query>
		);
		return <Details />;
	}
}

export default graphql(GET_FILM_DETAILS)(Details);
