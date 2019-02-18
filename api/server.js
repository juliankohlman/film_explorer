// const { GraphQLServer } = require('graphql-yoga');
import { GraphQLServer } from 'graphql-yoga';
import { typeDefs } from './schema/schema';
import { resolvers } from './schema/resolvers';
import dotenv from 'dotenv';
dotenv.config();

let port = process.env.PORT || 4000;

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() =>
	console.log(`Server is running on http://localhost:${port}`)
);
