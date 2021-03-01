import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen';
import MovieSearchScreen from './pages/MovieSearchScreen';
import MovieDetailsScreen from './pages/MovieDetailsScreen';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <HomeScreen{...props} />}/>
      <Route path="/search" render={(props) => <MovieSearchScreen{...props} />}/>
      <Route path="/:imdbID" render={(props) => <MovieDetailsScreen{...props}/>}/>
    </Switch>
  );
}

export default App;
