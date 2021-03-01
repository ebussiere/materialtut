import React, { useEffect } from 'react';
import MovieDetailsCard from '../components/MovieDetailsCard.js';
import { useDispatch,useSelector} from "react-redux";
import Header from '../components/Header';
import { Grid } from '@material-ui/core';

const HomeScreen = ({match}) => {
  const dispatch = useDispatch()

  return (
    <>
       <Header/>
      <Grid container fluid="true" style={{ height: '100vh' }} direction="row" justify="center" alignItems="center" spacing={0}>
        Home Screen
      </Grid>
      
    </>
       
   
  );
};
export default HomeScreen;