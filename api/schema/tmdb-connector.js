/**
 * TMDB axios connector functions (data-fetching)
 */
import axios from 'axios';
// Access to environment variables
import dotenv from 'dotenv';
dotenv.config();
const { API } = process.env;

//TODO add open search bar on landing page using the 'multi search query' https://developers.themoviedb.org/3/search/multi-search
//Todo add justWatch api for streaming availabilty of each film
/**
 *
 * @param {*} _
 * @param {*} param1
 * getPerson will be called under the explore genre function
 * to allow users to filter genre results by an actor or directors name
 */
export const getPerson = async (_, { queryString, page }) => {
	try {
		let res = await axios.get(
			`https://api.themoviedb.org/3/search/person?api_key=${API}&language=en-US&query=${queryString}&page=${page}&include_adult=false`
		);
		const searchResults = res.data.results;
		//Todo map over results and pull out [name, popularity, id] from results
		//Todo need to handle the 'known for' property
		// console.log('Top result:', searchResults[0].name, searchResults[0].id);
		return searchResults;
	} catch (error) {
		console.log(error);
	}
};

//Todo what will you render if the search returns no movies???
export const getFilm = async (_, { queryString, page }) => {
	try {
		let res = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${queryString}&page=${page}&include_adult=false`
		);

		const filmSearchResults = res.data.results;
		filmSearchResults.map(film => {
			// film.poster_path = `https://image.tmdb.org/t/p/original${film.poster_path}`;
			if (!film.poster_path) {
				film.poster_path =
					'https://via.placeholder.com/300x500.png?text=Film+Poster+Not+Available';
			} else {
				film.poster_path = `https://image.tmdb.org/t/p/original${
					film.poster_path
				}`;
			}
			film.overview;
		});
		// console.log('# of pages:', res.data.total_pages);
		// console.log('# of filmSearchResults:', res.data.total_results);
		return filmSearchResults;
	} catch (error) {
		console.log(error);
	}
};

/**
 * nowPlaying: returns a list of films now playing in theaters
 */
export const nowPlaying = async (_, { page }) => {
	try {
		let res = await axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}&language=en-US&page=${page}`
		);
		const movies = res.data.results;
		//Todo clean-up logic around building up poster_path string
		movies.map(movie => {
			// movie.poster_path = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
			movie.poster_path = `${movie.poster_path}`;
			if (!movie.poster_path) {
				movie.poster_path =
					'https://via.placeholder.com/300x500.png?text=movie+Poster+Not+Available';
			} else {
				movie.poster_path = `https://image.tmdb.org/t/p/original${
					movie.poster_path
				}`;
			}
			// movie.overview;
		});
		// console.log('# of pages:', res.data.total_pages);
		// console.log('# of movies:', res.data.total_results);
		return movies;
	} catch (error) {
		console.log(error);
	}
};

export const genreFilms = async (_, { genreID, page }) => {
	try {
		let res = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreID}`
		);
		// console.log(`Now viewing page ${page} of ${res.data.total_pages}`);
		// console.log('# of pages:', res.data.total_pages);
		// console.log('# of movies:', res.data.total_results);

		const films = res.data.results;
		films.map(film => {
			if (!film.poster_path) {
				film.poster_path =
					'https://via.placeholder.com/300x500.png?text=Film+Poster+Not+Available';
			} else {
				film.poster_path = `https://image.tmdb.org/t/p/original${
					film.poster_path
				}`;
			}
		});
		// console.log(films[0].title);

		return films;
	} catch (error) {
		console.log(error);
	}
};

/**
 * filmDetails: returns a data specific to film with given ID
 * @param {*} _ root param ignored
 * @param {*} param1 filmID
 */

export const filmDetails = async (_, { filmID }) => {
	try {
		let res = await axios.get(
			`https://api.themoviedb.org/3/movie/${filmID}?api_key=${API}&language=en-US&append_to_response=credits,videos,similar,recommendations`
		);
		const film = res.data;

		//* Film credits grab top billed cast, and from crew grab: casting director, music composer, costume designer, associate producers, editors, production designer, director of photography, executive producer, writers, director
		const crewATL = [
			'Director',
			'Original Music Composer',
			'Casting',
			'Director of Photography',
			'Production Design',
			'Editor',
			'Associate Producer',
			'Costume Design'
		];

		//TODO: handle null cases for profile path of cast and crew members
		film.cast = film.credits.cast.filter(member => member.order <= 20);

		film.crew = film.credits.crew.filter(
			member => crewATL.includes(member.job) || member.department === 'Writing'
		);

		console.log(new Set(film.crew));

		//TODO: need the id,key, and name from videos
		// ? Limit video amount to between 2-4
		// console.log(film.videos.results);
		film.videos = film.videos.results;

		// console.log(film.similar.results.slice(0, 4));
		film.similar = film.similar.results;

		// console.log(film.recommendations.results.slice(0, 4));
		film.recommendations = film.recommendations.results;

		if (!film.overview)
			film.overview = 'Oops looks like there is no overview for this movie';

		if (!film.tagline) film.tagline = 'Insert witty tagline here :)';

		if (!film.poster_path) {
			film.poster_path =
				'https://via.placeholder.com/300x500.png?text=Film+Poster+Not+Available';
		} else {
			film.poster_path = `https://image.tmdb.org/t/p/original${
				film.poster_path
			}`;
		}

		if (!film.backdrop_path)
			film.backdrop_path =
				'https://via.placeholder.com/728x90.png?text=Film+Backdrop+Not+Available';

		film.production_companies = film.production_companies
			.map(company => company.name)
			.join(', ');

		// release date
		// console.log(new Date(film.release_date).toString().split(' ').slice(1, 4))
		film.genres = film.genres.map(genre => genre.name).join(', ');

		film.budget = `${film.budget.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		})}`;

		if (film.runtime) {
			const runTimeH = Math.floor(+film.runtime / 60);
			const runTimeMin = +film.runtime % 60;
			film.runtime = `${runTimeH}h ${runTimeMin}min`;
		} else {
			film.runtime = `N/A`;
		}

		film.revenue = `${film.revenue.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		})}`;

		return film;
	} catch (error) {
		console.log(error);
	}
};

/**
 * genreExplore
 */

/* Checking for certifications existence to trigger setting of cert_country to US. per the tmdb api, these two params work in tandem so we need to check for a certification param then backtrack to set the country to the
US for accurate filtering
*/
export const genreQuery = async (_, { input }) => {
	let queryPropValues = [
		`&sort_by=${input.sort_by}`,
		`&certification_country=${input.certification_country}`,
		`&certification=${input.certification}`,
		`&include_adult=${input.include_adult}`,
		`&include_video=${input.include_video}`,
		`&page=${input.page}`,
		`&primary_release_year=${input.primary_release_year}`,
		`&primary_release_date.gte=${input.primary_release_date_gte}`,
		`&primary_release_date.lte=${input.primary_release_date_lte}`,
		`&with_genres=${input.genreID}`,
		`&with_people=${input.with_people}`,
		`&year=${input.year}`,
		`&with_runtime.gte=${input.with_runtime_gte}`,
		`&with_runtime.lte=${input.with_runtime_lte}`
	];

	let query = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US`;

	// Todo: fetch /search/person => id, which the becomes with_people value
	//* Check on queryPropValues[with_people] field. If user entered a string THEN
	//* run the getPerson query and set with_people field equal to first id of results array
	//* then proceed with rest of genreQuery

	if (input.personString) {
		try {
			let res = await axios.get(
				`https://api.themoviedb.org/3/search/person?api_key=${API}&language=en-US&query=${
					input.personString
				}&page=${input.page}&include_adult=false`
			);
			queryPropValues[10] = `&with_people=${res.data.results[0].id}`;
		} catch (error) {
			console.log(error);
		}
	}

	if (queryPropValues[2]) queryPropValues[1] = `&certification_country=US`;

	queryPropValues.forEach((arg, idx) => {
		if (!arg.includes('undefined')) query += queryPropValues[idx];
	});
	// console.log('dynamic query string', query);
	console.log('actor or director', input.personString);
	try {
		let res = await axios.get(query);
		// console.log('# of pages:', res.data.total_pages);
		// console.log('# of movies:', res.data.total_results);

		const genreFilms = res.data.results;
		genreFilms.map(film => {
			film.poster_path = `https://image.tmdb.org/t/p/original${
				film.poster_path
			}`;
			film.overview;
		});
		return genreFilms;
	} catch (error) {
		console.log(error);
	}
};
