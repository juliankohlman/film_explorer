import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import Landing from './pages/Landing';
import Genre from './pages/Genre';
import Detail from './pages/Detail';
import NowPlaying from './pages/NowPlaying';
// <Route path="comments" component={() => (<Comments myProp="value" />)}/>
const client = new ApolloClient({ uri: 'http://localhost:4000' });

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Router>
		<ApolloProvider client={client}>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/genre/:key" component={Genre} />
				<Route exact path="/nowplaying" component={NowPlaying} />
				{/* <Route
					exact
					path="/genre/:key"
					component={() => <Genre genreID="value" />}
				/> */}
				<Route exact path="/detail/:id" component={Detail} />
			</Switch>
		</ApolloProvider>
	</Router>,
	rootElement
);
