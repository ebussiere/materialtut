import React, { useEffect } from 'react';
import MovieDetailsCard from '../components/MovieDetailsCard.js';
import { useDispatch,useSelector} from "react-redux";
import { listMovieDetails } from '../actions/movieActions.js'
import { Grid } from '@material-ui/core';

const MovieDetailsScreen = ({match}) => {
  const dispatch = useDispatch()
  const movieDetails = useSelector(state => state.movie)
  const {movie } = movieDetails;
  useEffect(() => {
    dispatch(listMovieDetails(match.params.imdbID))
  }, [])
  return (
    
       <Grid container fluid="true" style={{height:'100vh'}} direction="row" justify="center" alignItems="center"  spacing={ 0 }>
      <MovieDetailsCard
        key={movie.imdbID}
        title={movie.Title}
        poster={movie.Poster}
        runtime={movie.Runtime}
        released={movie.Released}
        genre={movie.Genre}
        director={movie.Director}
        writer={movie.Writer}
        actors={movie.Actors}
        plot={movie.Plot}
        awards={movie.Awards}
        ratings={movie.Ratings}
        boxOffice={movie.BoxOffice}
        production={movie.Production}
        
        />
      </Grid>
   
  );
};
export default MovieDetailsScreen;