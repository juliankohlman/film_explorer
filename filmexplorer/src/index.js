import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import Landing from './pages/Landing';
import Genre from './pages/Genre';
import Detail from './pages/Detail';

const client = new ApolloClient({ uri: 'http://localhost:4000' });

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Router>
		<ApolloProvider client={client}>
			<Detail />
		</ApolloProvider>
	</Router>,
	rootElement
);
