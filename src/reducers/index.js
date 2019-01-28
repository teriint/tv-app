import { combineReducers } from 'redux'
import { MovieCoversReducer } from './TableMovieCoversReducer';

export const rootReducer = combineReducers({
  movies: MovieCoversReducer
})