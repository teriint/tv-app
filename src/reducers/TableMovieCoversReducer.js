import {
  SET_MOVIES_SUCCESS,
  SET_LOADING_ERROR,
} from '../actions/TableMovieCoversActions'

const initialState = {
  posts: [],
  selectedPostId: null,
  error: false,
  show: true,
}

export function MovieCoversReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES_SUCCESS:
      const posts = action.payload.slice(0, 50);
      return {
        ...state,
        posts
      }
    case SET_LOADING_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}