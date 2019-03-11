import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

// import './index.css';
import Container from './components/Container';
import Landing from './pages/landing/Landing';

// import * as serviceWorker from './serviceWorker';
const client = new ApolloClient({ uri: 'http://localhost:4000' });

ReactDOM.render(
	<Router>
		<ApolloProvider client={client}>
			<div>
				<Route exact path="/" component={Container} />
				<Route path="/nowplaying" component={Landing} />
				<Link to="/nowplaying">Now Playing Card</Link>
			</div>

			{/* <Landing /> */}
		</ApolloProvider>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
