import {
    SET_MOVIE_DETAIL_SUCCESS,
    SET_LOADING_DETAIL_ERROR,
  } from '../actions/MovieDetailActions'
  
  const initialState = {
    loadedPost: null,
    error: false,
  }
  
  export function MovieDetailReducer(state = initialState, action) {
    switch (action.type) {
      case SET_MOVIE_DETAIL_SUCCESS:
        return {
          ...state,
          loadedPost: action.payload
        }
      case SET_LOADING_DETAIL_ERROR:
        return {
          ...state,
          error: true
        }
      default:
        return state
    }
  }