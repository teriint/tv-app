export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
export const GET_MOVIES_FAIL = 'GET_MOVIES_FAIL'
// export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'

export function handleLoadMovies(arrMovies) {

  if (arrMovies) {
    return dispatch => {
        dispatch({
            type: GET_MOVIES_SUCCESS,
            payload: arrMovies, 
            }) 
        };
  } else {
    return dispatch => {
        dispatch({
            type: GET_MOVIES_FAIL,
            error: true, 
            }) 
        };
  }
  
}

// export function postSelectedHandler(id) {
//     return dispatch => {
//         dispatch({
//           type: GET_MOVIE_DETAIL,
//           payload: id,
//         }) 
//     };
// }