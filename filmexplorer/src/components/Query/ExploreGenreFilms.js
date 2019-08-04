import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { EXPLORE_GENRE } from '../../queries/exploreGenre';
import FilmPage from '../UI/FilmPage';
import { GoRocket } from 'react-icons/go';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

class ExploreGenreFilms extends Component {
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
		console.log(this.props.input);
		console.log(this.props.input.page);
		const ExplorePosters = () => (
			<Query
				query={EXPLORE_GENRE}
				variables={{ input: this.props.input, page: this.state.page }}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return <p>loading...</p>;
					if (error) return <p>error :(</p>;
					console.log(data.exploreGenre);
					let page = this.state.page;
					let films = data.exploreGenre;
					return (
						// ! MUST HANDLE CONDITION WHERE (data.exploreGenre[0].total_pages) returns null, handle this condition and render out a nice page for the user [See SearchFilms component]
						<>
              {films === [] ? (
                <div>
                  NO FILMS
                </div>
              ): (
                  <div>
                    films here
                  </div>
                )}
                  <div className="paginationData">
                    <span className="paginationText">
                      {films[0].total_results} Total Films To Explore
                    </span>
                    <span className="paginationText">{`Now viewing Page ${page} of ${
                      films[0].total_pages
                    }`}</span>
    
                    <form onSubmit={this.jumpPage}>
                      <label htmlFor="jump">
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
                    films={data.exploreGenre || []}
                    currentPage={page}
                    style={`listContainer`}
                  />
                </>
              );
              
        }}
			</Query>
		);
		return <ExplorePosters />;
	}
}

export default graphql(EXPLORE_GENRE)(ExploreGenreFilms);
