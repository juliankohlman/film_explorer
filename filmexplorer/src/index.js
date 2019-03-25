import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import Landing from './pages/Landing';
import Genre from './pages/Genre';
import Detail from './pages/Detail';
// <Route path="comments" component={() => (<Comments myProp="value" />)}/>
const client = new ApolloClient({ uri: 'http://localhost:4000' });

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Router>
		<ApolloProvider client={client}>
			<Route exact path="/" component={Landing} />
			<Route path="/genre" component={Genre} />
			<Route path="/detail" component={Detail} />
		</ApolloProvider>
	</Router>,
	rootElement
);
