import { makeSchema } from 'nexus';
import { Genre } from '../schema/types/genres';
import { NowPlaying } from '../schema/queries/nowPlaying';
const path = require('path');
// import queries in this file

export const schema = makeSchema({
	types: [Genre, NowPlaying],
	outputs: {
		schema: path.join(__dirname, './generated/schema.graphql'),
		typegen: path.join(__dirname, './generated/typings.ts')
	}
});
