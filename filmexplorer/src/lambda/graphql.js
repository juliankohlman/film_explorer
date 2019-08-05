import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs } from './schema/schema.js';
import { resolvers } from './schema/resolvers.js';

const server = new ApolloServer({
	cors: false,
	typeDefs,
	resolvers
	// playground: true,
	// introspection: true
});

exports.handler = server.createHandler({
	cors: {
		origin: '*',
		credentials: true,
		allowedHeaders: '*'
	}
});
