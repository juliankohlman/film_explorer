// getNowPlaying: [NowPlaying!]!
export const typeDefs = `
	type Query {
		getFilmDetails(filmID: Int!): FilmDetails
		getGenre(genreID: Int!, page: Int = 1): [NowPlaying!]!
    getNowPlaying(page: Int = 1): [NowPlaying!]!
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
