import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { GET_NOW_PLAYING } from '../../queries/getNowPlaying';
import FilmPage from '../UI/FilmPage';
import { GoRocket } from 'react-icons/go';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

class NowPlayingFilms extends Component {
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
		const NowPlayingPosters = () => (
			<Query
				query={GET_NOW_PLAYING}
				variables={{ page: this.state.page }}
				notifyOnNetworkStatusChange={true}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return 'Loading...';
					if (error) return `Error! ${error.message}`;
					// console.log(data.getNowPlaying);
					// console.log(this.state.page);
					let page = this.state.page;
					let films = data.getNowPlaying;
					return (
						<>
							<div className="paginationData">
								<h3>{films[0].total_results} Total Films To Explore</h3>
								<h3>{`Now viewing Page ${page} of ${films[0].total_pages}`}</h3>
								<form onSubmit={this.jumpPage}>
									<label htmlFor="jump">
										{/* {`Page Jump ${films[0].total_pages}`} */}
										Page Jump <GoRocket style={{ verticalAlign: 'middle' }} />
									</label>
									<input
										type="number"
										name="jump"
										min="1"
										max={films[0].total_pages}
										ref={input => (this.input = input)}
									/>
								</form>
								{page > 1 && page < films[0].total_pages ? (
									<>
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
								films={data.getNowPlaying || []}
								currentPage={page}
								style={'nowPlayingContainer'}
							/>
						</>
					);
				}}
			</Query>
		);
		return <NowPlayingPosters />;
	}
}

export default graphql(GET_NOW_PLAYING)(NowPlayingFilms);
