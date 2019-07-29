import { GiSasquatch } from 'react-icons/gi';
const genres = [
	'Now Playing',
	'Action',
	'Adventure',
	'Animation',
	'Comedy',
	'Crime',
	'Documentary',
	'Drama',
	'Family',
	'Fantasy',
	'History',
	'Horror',
	'Music',
	'Mystery',
	'Romance',
	'Science Fiction',
	'TV Movie',
	'Thriller',
	'War',
	'Western'
];

const genreIDs = {
	nowplaying: {
		id: 1,
		label: 'Newly Released Films...'
	},
	action: {
		id: 28,
		label: 'Action Films...'
	},
	adventure: {
		id: 12,
		label: 'Adventure Films...'
	},
	animation: {
		id: 16,
		label: 'Animation Films',
		icon: <GiSasquatch />
	},
	comedy: {
		id: 35,
		label: 'Comedy Films'
	},
	crime: {
		id: 80,
		label: 'Crime Films'
	},
	documentary: {
		id: 99,
		label: 'Documentary Films'
	},
	drama: {
		id: 18,
		label: 'Drama Films'
	},
	family: {
		id: 10751,
		label: 'Family Films'
	},
	fantasy: {
		id: 14,
		label: 'Fantasy Films'
	},
	history: {
		id: 36,
		label: 'History Films'
	},
	horror: {
		id: 27,
		label: 'Horror Films'
	},
	music: {
		id: 10402,
		label: 'Music Films'
	},
	mystery: {
		id: 9648,
		label: 'Mystery Films'
	},
	romance: {
		id: 10749,
		label: 'Romance Films'
	},
	scienceFiction: {
		id: 878,
		label: 'Science Fiction Films'
	},
	tvMovie: {
		id: 10770,
		label: 'TV Movies'
	},
	thriller: {
		id: 53,
		label: 'Thriller Films'
	},
	war: { id: 10752, label: 'War Films' },
	western: {
		id: 37,
		label: 'Western Films'
	}
};

module.exports = { genreIDs, genres };
