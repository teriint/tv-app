import axios from '../axios'

export const SET_MOVIE_DETAIL_SUCCESS = 'SET_MOVIE_DETAIL_SUCCESS'
export const SET_LOADING_DETAIL_ERROR = 'SET_LOADING_DETAIL_ERROR'

export const setMovieDetail = (payload) => dispatch => dispatch({ type: SET_MOVIE_DETAIL_SUCCESS, payload })

export const setErrorLoadingDetail = () => dispatch => dispatch({ type: SET_LOADING_DETAIL_ERROR })

export const getShowById = (id) => async dispatch => {
    try {
        const response = await axios.get(`/shows/${id}?embed=episodes`)
        dispatch(setMovieDetail(response.data))
    } catch (error) {
        dispatch(setErrorLoadingDetail());
    }
}