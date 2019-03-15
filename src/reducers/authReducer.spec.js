import * as ActionTypes from '../constants/actionTypes';
import reducer from './authReducer';

describe('Reducers::auth', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = { credentials: {}, isAuthenticated: false, redirectToReferrer: false };

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle AUTHENTICATE', () => {
    const action = { type: ActionTypes.AUTHENTICATE, payload: { credentials: {} } };
    const appState = { credentials: {}, isAuthenticated: false, redirectToReferrer: false };
    const expected = { credentials: {}, isAuthenticated: true, redirectToReferrer: true };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
