// const { GraphQLServer } = require('graphql-yoga');
import { GraphQLServer } from 'graphql-yoga';
import { schema } from './schema/schema';
import dotenv from 'dotenv';

const port = process.env.PORT || 4000;
dotenv.config();

const server = new GraphQLServer({ schema });

server.start(() =>
	console.log(`Server is running on http://localhost:${port}`)
);
