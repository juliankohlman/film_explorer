// Brings in server, schema, and resolver modules
import { GraphQLServer } from 'graphql-yoga';
import { typeDefs } from './schema/schema';
import { resolvers } from './schema/resolvers';

const port = process.env.PORT || 4000;
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() =>
	console.log(`Server is running on http://localhost:${port}`)
);
