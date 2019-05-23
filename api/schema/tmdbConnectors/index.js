/**
 * TMDB axios connector functions (data-fetching)
 */

import { nowPlaying } from './nowPlaying';
import { getPerson } from './getPerson';
import { getFilm } from './getFilm';
import { genreFilms } from './genreFilms';
import { filmDetails } from './filmDetails';
import { genreQuery } from './genreQuery';

export const connectors = {
	genreQuery,
	filmDetails,
	genreFilms,
	getFilm,
	getPerson,
	nowPlaying
};
