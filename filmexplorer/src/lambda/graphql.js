import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs } from './schema/schema.js';
import { resolvers } from './schema/resolvers.js';

const server = new ApolloServer({
	cors: false,
	typeDefs,
	resolvers,
	introspection: true
	// ssrMode: true,
	// ssrForceFetchDelay: 100
	// playground: true,
});

exports.handler = server.createHandler({
	cors: {
		origin: true,
		credentials: true,
		allowedHeaders: '*'
	}
});
