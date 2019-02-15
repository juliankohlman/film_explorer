import { makeSchema } from 'nexus';
import { Genre } from '../schema/types/genres';
// import queries in this file

export const schema = makeSchema({
	types: [Genre],
	outputs: {
		schema: __dirname + '/generated/schema.graphql',
		typegen: __dirname + '/generated/typings.ts'
	}
});
