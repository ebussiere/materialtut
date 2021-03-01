import React, {useEffect } from 'react';
import { useDispatch,useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {listMovies } from '../actions/movieActions.js'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled() {
  const movieListInfo = useSelector(state => state.movieListInfo);
  const { term } = movieListInfo;
  const  totalPages = Math.floor(movieListInfo.page/10)+1;
  const classes = useStyles();
  const [currentPage, setCurrentPage] = React.useState(1);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listMovies(term, currentPage))
  }, [dispatch, currentPage])

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {currentPage}</Typography>
      <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
    </div>
  );
}