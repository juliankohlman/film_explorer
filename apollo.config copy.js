module.exports = {
	client: {
		service: {
			name: 'film-explorer',
			localSchemaFile: './api/schema/schema.graphql',
			includes: ['./filmexplore/src/queries/**/*.js']
		}
	}
};
