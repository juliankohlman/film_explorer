import axios from 'axios';
import { API } from '.';

/**
 *
 * @param {*} _
 * @param {*} variableObject
 * getPerson will be called under the explore genre function
 * to allow users to filter genre results by an actor or directors name
 */

export const getPerson = async (_, { queryString, page }) => {
	try {
		const res = await axios.get(
			`https://api.themoviedb.org/3/search/person?api_key=${API}&language=en-US&query=${queryString}&page=${page}&include_adult=false`
		);
		const searchResults = res.data.results;
		//Todo map over results and pull out [name, popularity, id] from results
		//Todo need to handle the 'known for' property
		return searchResults;
	} catch (error) {
		console.log(error);
	}
};
