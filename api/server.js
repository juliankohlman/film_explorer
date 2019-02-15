// const { GraphQLServer } = require('graphql-yoga');
import { GraphQLServer } from 'graphql-yoga';
import { schema } from './schema/schema';
import dotenv from 'dotenv';
dotenv.config();

let port = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.start(() =>
	console.log(`Server is running on http://localhost:${port}`)
);
