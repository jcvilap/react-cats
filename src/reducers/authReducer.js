import { AUTHENTICATE, REFRESH_SESSION, SIGN_OUT } from '../constants/actionTypes';
import { authenticate, isAuthenticated as isAuth, refreshSession, signout } from '../services/auth';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case AUTHENTICATE:
      authenticate(action.payload.credentials);

      return Object.assign({}, state, {
        redirectToReferrer: true,
        credentials: action.payload.credentials,
        isAuthenticated: true,
      });
    case REFRESH_SESSION:
      const credentials = refreshSession();
      const isAuthenticated = isAuth();

      return Object.assign({}, state, {
        redirectToReferrer: isAuthenticated,
        credentials,
        isAuthenticated,
      });
    case SIGN_OUT:
      signout();

      return Object.assign({}, state, {
        redirectToReferrer: true,
        credentials: {},
        isAuthenticated: false,
      });
    default:
      return state;
  }
}
