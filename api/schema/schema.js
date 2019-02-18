export const typeDefs = `
  type Query {
    getNowPlaying: [NowPlaying!]!
    getGenre(genreID: Int): [NowPlaying!]!
  }

  type NowPlaying {
    id: ID!
		poster_path: String!
		title: String!
		overview: String!
  }

  
`;
