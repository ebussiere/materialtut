import { MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, MOVIE_LIST_FAIL, MOVIE_DETAILS_REQUEST, MOVIE_DETAILS_SUCCESS, MOVIE_DETAILS_FAIL } from '../constants/constants';

export const movieListReducer = (state = { movies: [], page:0 }, action) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { loading: true, movies: [] };
    case MOVIE_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload.res.Search,
        page: action.payload.res.totalResults,
        term: action.payload.term
      };
    case MOVIE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieDetailsReducer = (state = { movie: {} }, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case MOVIE_DETAILS_SUCCESS:
      return { loading: false, movie: action.payload };
    case MOVIE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};