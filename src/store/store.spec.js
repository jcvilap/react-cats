import * as ActionTypes from '../constants/actionTypes';

import configureStore from './configureStore';

describe('Store', () => {
  it('should display results when necessary data is provided', () => {
    const store = configureStore();

    const actions = [
      { type: ActionTypes.AUTHENTICATE, payload: { credentials: { userName: 'test', password: 'test' } } },
      // Add more actions here!
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      auth: {
        credentials: { password: 'test', userName: 'test' },
        isAuthenticated: true,
        redirectToReferrer: true
      },
      cats: { favoriteCats: [], favoriteCatsByUser: {}, randomCat: "" },
    };

    expect(actual).toMatchObject(expected);
  });
});
