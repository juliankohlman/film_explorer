import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

// import './index.css';
import Main from './pages/landing/Main';
import GenreTable from './components/GenreTable';
// import NowPlaying from './pages/landing/NowPlaying';
// import * as serviceWorker from './serviceWorker';
const client = new ApolloClient({ uri: 'http://localhost:4000' });

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Router>
		<ApolloProvider client={client}>
			<GenreTable />
		</ApolloProvider>
	</Router>,
	rootElement
);
