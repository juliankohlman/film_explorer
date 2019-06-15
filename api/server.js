// Brings in server, schema, and resolver modules
// Todo look into serverless implementation and fix cors issues (set options)
import { GraphQLServer } from 'graphql-yoga';
import { typeDefs } from './schema/schema';
import { resolvers } from './schema/resolvers';

const port = process.env.PORT || 4000;
const opts = {
	port,
	cors: {
		credentials: true,
		origin: ['http://localhost:3000']
	}
};
const context = req => ({
	req: req.request
});
const server = new GraphQLServer({ typeDefs, resolvers, context });

//Todo add options object and configure cors

server.start(
	(opts,
	({ port }) => console.log(`Server is running on http://localhost:${port}`))
);
