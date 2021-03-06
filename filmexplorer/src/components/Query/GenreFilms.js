import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { GET_GENRE } from '../../queries/getGenre';
import NowPlayingFilms from './NowPlayingFilms';
import FilmPage from '../UI/FilmPage';
import { GoRocket } from 'react-icons/go';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

class GenreFilms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}

	jumpPage = e => {
		e.preventDefault();
		this.setState({
			page: +this.input.value
		});
	};
	render() {
		const id = this.props.id;
		// console.log(this.props);

		const GenrePosters = () => (
			<Query
				query={GET_GENRE}
				variables={{ genreID: id, page: this.state.page }}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return <p>loading...</p>;
					if (error) return <p>error :(</p>;
					let page = this.state.page;
					let films = data.getGenre;
					// console.log(data.getGenre);
					return (
						<>
							<>
								<div className="paginationData">
									<span className="paginationText">
										{films[0].total_results} Total Films To Explore
									</span>
									<span className="paginationText">
										{`Now viewing Page ${page} of ${films[0].total_pages || 0}`}
									</span>
									<form onSubmit={this.jumpPage}>
										<label htmlFor="jump">
											Page Jump <GoRocket style={{ verticalAlign: 'middle' }} />
										</label>
										<input
											type="number"
											name="jump"
											min="1"
											//! Todo max must be 1000
											max={films[0].total_pages}
											ref={input => (this.input = input)}
										/>
									</form>
									{page > 1 && page < films[0].total_pages ? (
										<>
											<span>
												<MdChevronLeft
													onClick={() =>
														fetchMore({
															variables: {
																page: this.setState(state => {
																	return state.page === 1
																		? { page: state.page }
																		: {
																				page: (state.page -= 1)
																		  };
																})
															},
															updateQuery: (prevPage, { fetchMoreResult }) => {
																if (!fetchMoreResult) return prevPage;
																return {
																	searchFilm: [...fetchMoreResult.searchFilm]
																};
															}
														})
													}
													className={this.props.chevron}
												/>

												<MdChevronRight
													onClick={() =>
														fetchMore({
															variables: {
																page: this.setState(state => {
																	return {
																		page: (state.page += 1)
																	};
																})
															},
															updateQuery: (prevPage, { fetchMoreResult }) => {
																if (!fetchMoreResult) return prevPage;
																return {
																	searchFilm: [...fetchMoreResult.searchFilm]
																};
															}
														})
													}
													className={this.props.chevron}
												/>
											</span>
										</>
									) : page === films[0].total_pages ? (
										<MdChevronLeft
											onClick={() =>
												fetchMore({
													variables: {
														page: this.setState(state => {
															return state.page === 1
																? { page: state.page }
																: {
																		page: (state.page -= 1)
																  };
														})
													},
													updateQuery: (prevPage, { fetchMoreResult }) => {
														if (!fetchMoreResult) return prevPage;
														return {
															searchFilm: [...fetchMoreResult.searchFilm]
														};
													}
												})
											}
											className={this.props.chevron}
										/>
									) : (
										<MdChevronRight
											onClick={() =>
												fetchMore({
													variables: {
														page: this.setState(state => {
															return {
																page: (state.page += 1)
															};
														})
													},
													updateQuery: (prevPage, { fetchMoreResult }) => {
														if (!fetchMoreResult) return prevPage;
														return {
															searchFilm: [...fetchMoreResult.searchFilm]
														};
													}
												})
											}
											className={this.props.chevron}
										/>
									)}
								</div>

								<FilmPage
									films={data.getGenre || []}
									currentPage={page}
									style={`listContainer`}
								/>
							</>
						</>
					);
				}}
			</Query>
		);

		return this.props.id === 1 ? (
			<NowPlayingFilms chevron={'chevron'} />
		) : (
			<GenrePosters />
		);
	}
}

export default graphql(GET_GENRE)(GenreFilms);
