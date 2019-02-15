import { queryType } from 'nexus/dist';

export const NowPlaying = queryType({
	name: 'NowPlaying',
	description: 'Movies now playing in theaters',
	definition(t) {
		t.int('id'),
			t.string('poster_path'),
			t.string('title'),
			t.string('overview');
	}
});
