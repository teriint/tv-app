import axios from '../axios'

export const SET_MOVIES_SUCCESS = 'SET_MOVIES_SUCCESS'
export const SET_LOADING_ERROR = 'SET_LOADING_ERROR'

export const setPosts = (payload) => dispatch => dispatch({ type: SET_MOVIES_SUCCESS, payload })

export const setErrorLoading = () => dispatch => dispatch({ type: SET_LOADING_ERROR })

export const getShows = () => async dispatch => {
    try {
        const response = await axios.get('/shows')
        dispatch(setPosts(response.data))
    } catch (error) {
        dispatch(setErrorLoading());
    }
}