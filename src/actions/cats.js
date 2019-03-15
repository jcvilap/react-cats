import {
  FETCH_RANDOM_CAT_FAILURE,
  FETCH_RANDOM_CAT_SUCCESS,
  LOAD_FAVORITE,
  TOGGLE_FAVORITE
} from '../constants/actionTypes';
import { fetchCat } from '../services/cats';

export const loadFavorites = (cat) => ({ type: LOAD_FAVORITE, payload: cat });
export const toggleFavorite = (cat) => ({ type: TOGGLE_FAVORITE, payload: cat });
export const fetchRandomCatSuccess = (cat) => ({ type: FETCH_RANDOM_CAT_SUCCESS, payload: cat });
export const fetchRandomCatFailure = (error) => ({ type: FETCH_RANDOM_CAT_FAILURE, payload: error });
export const fetchRandomCat = () => (dispatch) => fetchCat()
  .then(cat => dispatch(fetchRandomCatSuccess(cat)))
  .catch(error => dispatch(fetchRandomCatFailure(error)));