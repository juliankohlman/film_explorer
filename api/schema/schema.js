// getNowPlaying: [NowPlaying!]!
export const typeDefs = `
	type Query {
		getFilmDetails(filmID: Int!): FilmDetails
		getGenre(genreID: Int!): [NowPlaying!]!
    getNowPlaying(page: Int): [NowPlaying!]!
  }
  
	type NowPlaying {
		id: ID!
		poster_path: String
		title: String!
		overview: String!
	}

	type FilmDetails {
		backdrop_path: String
		budget: Int!
		genres: String!
		id: ID!
		overview: String!
		popularity: Float!
		poster_path: String
		production_companies: String!
		release_date: String!
		revenue: Int!
		runtime: String
		status: String!
		tagline: String
		title: String!
  }
`;

export const variables = {
	page: '1'
};
