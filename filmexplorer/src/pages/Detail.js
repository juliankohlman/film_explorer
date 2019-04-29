import React, { Component } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import FilmBackdrop from '../components/FilmBackdrop';
import Button from '../components/Button';
import FilmPoster from '../components/FilmPoster';
import FilmOverview from '../components/FilmOverview';
import FilmCredits from '../components/FilmCredits';
import { GET_FILM_DETAILS } from '../queries/getFilmDetails';
import { Query, graphql } from 'react-apollo';

class Detail extends Component {
	constructor(props) {
		super(props);
	}
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

					return (
						<Container>
							{console.log(this.props.match.params.id)}
							<Header>
								<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
									<CallToAction callout="The Film Explorer" />
								</div>
								<Button text="Home" />
								<Button text="Back to Genre" />
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
							<FilmCredits />
						</Container>
					);
				}}
			</Query>
		);
		return (
			// <Container>
			// 	{console.log(this.props.match.params.id)}
			// 	<Header>
			// 		<div className="dtc-ns tc pv4 bg-black-05 v-mid w-30">
			// 			<CallToAction callout="The Film Explorer" />
			// 		</div>
			// 		<Button text="Home" />
			// 		<Button text="Back to Genre" />
			// 	</Header>
			// 	<div style={{ paddingTop: '274px' }}>
			// 		<FilmBackdrop />
			// 	</div>
			// 	<FilmPoster />
			// 	<FilmOverview />
			// 	<FilmCredits />
			// </Container>
			<Details />
		);
	}
}

export default graphql(GET_FILM_DETAILS)(Detail);
