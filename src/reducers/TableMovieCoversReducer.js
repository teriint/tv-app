import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  // GET_MOVIE_DETAIL
} from '../actions/TableMovieCoversActions'

const initialState = {
    posts: [],
    selectedPostId: null,
    error: false,
    show: true,
  }
  
  export function MovieCoversReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MOVIES_SUCCESS:
        return { ...state, posts: action.payload};
  
      case GET_MOVIES_FAIL:
        return { ...state, error:  action.error };

      // case GET_MOVIE_DETAIL:
      //   return { ...state, selectedPostId:  action.payload };

      default:
        return state
    }
  }