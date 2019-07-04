import { ApolloServer } from 'apollo-server-lambda';

import { typeDefs } from './schema/schema';
import { resolvers } from './schema/resolvers';

const server = new ApolloServer({
	typeDefs,
	resolvers
});

exports.handler = server.createHandler();
