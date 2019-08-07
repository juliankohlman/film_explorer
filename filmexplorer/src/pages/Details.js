import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { MdKeyboardBackspace } from 'react-icons/md';
import { GET_FILM_DETAILS } from '../queries/getFilmDetails';
import Container from '../components/UI/Container';
import Header from '../components/UI/Header';
import FilmBackdrop from '../components/UI/FilmBackdrop';
import FilmPoster from '../components/UI/FilmPoster';

import FilmCast from '../components/UI/FilmCast';
import FilmCrew from '../components/UI/FilmCrew';

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
					// console.log(data.getFilmDetails);
					//Todo Back to search results if user reached the detail page via a search query
					return (
						<Container>
							{/* {console.log(this.props)} */}

							<Header style={`header`}>
								<div className="ctaMessage">
									<span className="genrePop">
										{data.getFilmDetails.tagline}
									</span>
								</div>
								{/* Conditional render here: if user got here via a search on landing button should say back to genre(S)/ if user got here via a genre selection go back to genre */}
								<button
									onClick={this.props.history.goBack}
									className="backToGenre"
								>
									<MdKeyboardBackspace
										style={{
											verticalAlign: 'middle',
											color: '#d9411e'
											// cursor: 'pointer',
											// height: '20px',
											// width: '40px'
										}}
									/>
								</button>
							</Header>
							<FilmBackdrop
								backdrop_path={data.getFilmDetails.backdrop_path}
								title={data.getFilmDetails.title}
							/>
							<div>
								<div className="detailContainer">
									<h1>
										{data.getFilmDetails.title} (
										{data.getFilmDetails.release_date.split('-')[0]})
									</h1>
									<p>{data.getFilmDetails.overview}</p>
									<div className="posterWithData">
										<div className="left">
											<FilmPoster
												poster_path={data.getFilmDetails.poster_path}
												title={data.getFilmDetails.title}
											/>
										</div>
										<div className="right">
											<FilmMetaData
												revenue={data.getFilmDetails.revenue}
												budget={data.getFilmDetails.budget}
												runtime={data.getFilmDetails.runtime}
												status={data.getFilmDetails.status}
												tagline={data.getFilmDetails.tagline}
												release_date={data.getFilmDetails.release_date}
												similar={
													data.getFilmDetails.similar[0] === undefined
														? 'N/A'
														: data.getFilmDetails.similar[0].title
												}
												recommendations={
													data.getFilmDetails.recommendations.length
														? data.getFilmDetails.recommendations[0].title
														: 'N/A'
												}
											/>
										</div>
									</div>
									<div className="trailerContainer">
										<FilmTrailer videos={data.getFilmDetails.videos} />
									</div>
									<div className="castCrew">
										<FilmCast cast={data.getFilmDetails.cast} />
										<FilmCrew crew={data.getFilmDetails.crew} />
									</div>
								</div>
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
