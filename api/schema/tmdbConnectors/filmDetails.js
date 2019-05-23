import axios from 'axios';
// Access to environment variables
import dotenv from 'dotenv';
dotenv.config();
const { API } = process.env;
import { posterImageCheck, backdropCheck } from '../helpers';

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

		//Todo replace with random thumbnail images
		film.crew = film.credits.crew
			.filter(
				member =>
					crewATL.includes(member.job) || member.department === 'Writing'
			)
			.map(crewMember =>
				crewMember.profile_path === null
					? Object.assign(
							crewMember,
							(crewMember.profile_path =
								'https://via.placeholder.com/300x500.png?text=Film+Poster+Not+Available')
					  )
					: Object.assign(
							crewMember,
							(crewMember.profile_path = `https://image.tmdb.org/t/p/original${
								crewMember.profile_path
							}`)
					  )
			);

		//TODO: need the id,key, and name from videos
		// ? Limit video amount to between 2-4
		console.log(film.videos.results);
		film.videos = film.videos.results;

		// console.log(film.similar.results.slice(0, 4));
		film.similar = film.similar.results;
		// console.log(film.similar);

		// console.log(film.recommendations.results.slice(0, 4));
		film.recommendations = film.recommendations.results;

		if (!film.overview)
			film.overview = 'Oops looks like there is no overview for this movie';

		if (!film.tagline) film.tagline = 'Insert witty tagline here :)';

		film.poster_path = posterImageCheck(film.poster_path, film);

		film.backdrop_path = backdropCheck(film.backdrop_path, film);
		// if (!film.backdrop_path)
		// 	film.backdrop_path =
		// 		'https://via.placeholder.com/728x90.png?text=Film+Backdrop+Not+Available';

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
