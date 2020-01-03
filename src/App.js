import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import apolloClient from './apolloClient';
import { Home } from './Home';
import { Detail } from './Detail';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ApolloHooksProvider client={apolloClient}>
        <Router>
          <React.Fragment>
            <Route exact={true} path={'/'} component={Home} />
            <Route path={'/details/:movieId'} component={Detail} />
          </React.Fragment>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
