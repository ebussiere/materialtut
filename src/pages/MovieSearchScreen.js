import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MovieCard from '../components/MovieCard.js';
import { useSelector } from "react-redux";
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import { Grid} from "@material-ui/core";

const MovieSearchScreen = (props) => {
  const movieListInfo = useSelector(state => state.movieListInfo);
  const { movies } = movieListInfo;
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
        <Pagination/>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
      {movies && movies.length > 0 ? movies.map((movie, idx) => (
        <Grid item xs={4} key={idx }>
        <MovieCard history={props.history } imdbID={movie.imdbID } title={movie.Title} poster={movie.Poster }/>
        </Grid>
      )) : <h1>No movies found</h1>}
      </Grid>
    </>
  );
};

export default MovieSearchScreen;