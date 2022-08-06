import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const App = () => {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='app'>
          <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/profile:username?' component={Profile} />
                <Route exact path='/explore' component={Explore} />
              </Switch>
            </div>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
