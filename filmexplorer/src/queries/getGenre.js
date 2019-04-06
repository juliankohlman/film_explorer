import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import GenreTable from '../components/GenreTable';

const GET_GENRE = gql`
	query($genreID: Int!, $page: Int = 1) {
		getGenre(genreID: $genreID, page: $page) {
			id
			poster_path
			title
			overview
		}
	}
`;

class filmGenre extends Component {}
// Todo: finish query below and move into class component
// need to pull needed query id from props.

// export const GetGenre = () => (
// 	<Query query={GET_GENRE} variables={{}}>
// 		{({ loading, error, data }) => {
// 			if (loading) return <p>loading...</p>;
// 			if (error) return <p>error :(</p>;
// 			console.log(data.getGenre);
// 		}}
// 	</Query>
// );
