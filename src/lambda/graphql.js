import { ApolloServer } from 'apollo-server-lambda';

import { typeDefs } from './schema/schema.js';
import { resolvers } from './schema/resolvers.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: true,
	introspection: true
});

exports.handler = server.createHandler({
	cors: {
		origin: '*',
		credentials: true
	}
});
// const { ApolloServer, gql } = require('apollo-server-lambda');

// const typeDefs = gql`
// 	type Query {
// 		hello: String
// 	}
// `;

// const resolvers = {
// 	Query: {
// 		hello: (parent, args, context) => {
// 			return 'Hello, world!';
// 		}
// 	}
// };

// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers,
// 	playground: true
// });

// exports.handler = server.createHandler();
