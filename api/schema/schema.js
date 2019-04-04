export const typeDefs = `
	type Query {
		getFilmDetails(filmID: Int!): FilmDetails
		getGenre(genreID: Int!, page: Int = 1): [FilmBasic!]!
    getNowPlaying(page: Int = 1): [FilmBasic!]!
    exploreGenre(input: GenreInput): [FilmBasic!]! 
    searchPerson(queryString: String, page: Int = 1): [Person!]!
    searchFilm(queryString: String, page: Int = 1): [FilmBasic!]!
  }

  input GenreInput {
    sort_by: String,
    certification_country: String,
    certification: String,
    include_adult: Boolean = false,
    include_video: Boolean = false,
    page: Int = 1,
    primary_release_year: Int,
    primary_release_date_gte: String,
    primary_release_date_lte: String,
    genreID: Int!,
    with_people: String,
    year: Int,
    with_runtime_gte: Int,
    with_runtime_lte: Int,
    personString: String
  }

  type Person {
    name: String!
    popularity: Float!
    id: ID!
    profile_path: String
  }

	type FilmBasic {
		id: ID!
		poster_path: String
		title: String!
		overview: String!
  }
  
	type FilmDetails {
    backdrop_path: String
		budget: String!
    genres: String!
		id: ID!
		overview: String!
		popularity: Float!
    poster_path: String
    production_companies: String!
		release_date: String!
		revenue: String!
		runtime: String
		status: String!
		tagline: String
    title: String! 
  }  
`;
