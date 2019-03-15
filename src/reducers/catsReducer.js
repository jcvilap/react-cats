import {
  FETCH_RANDOM_CAT_FAILURE,
  FETCH_RANDOM_CAT_SUCCESS,
  LOAD_FAVORITE,
  TOGGLE_FAVORITE
} from '../constants/actionTypes';
import { getFavorites, toggleFavorite } from '../services/cats';
import initialState from './initialState';

export default function catsReducer(state = initialState.cats, action) {
  switch (action.type) {
    case FETCH_RANDOM_CAT_SUCCESS:
      return Object.assign({}, state, {
        randomCat: action.payload
      });
    case FETCH_RANDOM_CAT_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    case TOGGLE_FAVORITE:
      return Object.assign({}, state, {
        favoriteCats: toggleFavorite(action.payload)
      });
    case LOAD_FAVORITE:
      return Object.assign({}, state, {
        favoriteCats: getFavorites(action.payload)
      });
    default:
      return state;
  }
}
