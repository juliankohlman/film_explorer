import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Landing from './pages/Landing';
import Genre from './pages/Genre';
import Details from './pages/Details';

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
	cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
	uri:
		process.env.NODE_ENV === 'production'
			? '/.netlify/functions/graphql'
			: 'http://localhost:3000/.netlify/functions/graphql',
	ssrMode: true,
	ssrForceFetchDelay: 100
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
serviceWorker.unregister();
