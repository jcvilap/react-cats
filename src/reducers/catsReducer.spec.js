import * as ActionTypes from '../constants/actionTypes';
import reducer from './catsReducer';

describe('Reducers::cats', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = { favoriteCats: [], favoriteCatsByUser: {}, randomCat: "" };

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle TOGGLE_FAVORITE', () => {
    const action = { type: ActionTypes.TOGGLE_FAVORITE, payload: { cat: 'tom' } };
    const appState = { favoriteCats: [], favoriteCatsByUser: {}, randomCat: '' };
    const expected = { favoriteCats: [{ cat: 'tom' }], favoriteCatsByUser: {}, randomCat: '' };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
