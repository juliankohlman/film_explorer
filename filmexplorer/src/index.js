import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Landing from './pages/Landing';
import Genre from './pages/Genre';
import Details from './pages/Details';
// import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
	uri: '/.netlify/functions/graphql',
	fetch: fetch
});

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Router>
		<ApolloProvider client={client}>
			<Switch>
				<Route exact path="/" component={Landing} />

				<Route exact path="/genre/:key" component={Genre} />

				<Route exact path="/detail/:id" component={Details} />
			</Switch>
		</ApolloProvider>
	</Router>,
	rootElement
);
// serviceWorker.unregister();
