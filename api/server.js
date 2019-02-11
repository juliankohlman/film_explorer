import { GraphQLServer } from 'graphql-yoga';

let port = -process.env.PORT || 4000;

const server = new GraphQLServer({});

server.start(() => `Server is running on http://localhost:${port}`);
