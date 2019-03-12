import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

// import './index.css';
import Main from './pages/landing/Main';

// import * as serviceWorker from './serviceWorker';
const client = new ApolloClient({ uri: 'http://localhost:4000' });

ReactDOM.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<Main />
		</ApolloProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
