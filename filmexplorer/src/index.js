import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

import { ApolloProvider } from 'react-apollo';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import Landing from './pages/Landing';
import Genre from './pages/Genre';
// import Detail from './pages/Detail';
//* Test Details component
import Details from './pages/Details';
// import NowPlaying from './pages/NowPlaying';

const client = new ApolloClient({
	// uri: 'http://localhost:4000',
	uri: 'http://localhost:9000/.netlify/functions/graphql',
	// uri: '/.netlify/functions/graphql',
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
