import { combineReducers } from 'redux'
import { MovieCoversReducer } from './TableMovieCoversReducer';
import { MovieDetailReducer } from './MovieDetailReducer';

export const rootReducer = combineReducers({
  movies: MovieCoversReducer,
  movieDetail: MovieDetailReducer
})