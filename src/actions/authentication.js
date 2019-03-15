import { AUTHENTICATE, REFRESH_SESSION, SIGN_OUT } from '../constants/actionTypes';

export const authenticate = (credentials) => ({ type: AUTHENTICATE, payload: credentials });
export const refreshSession = () => ({ type: REFRESH_SESSION });
export const signOut = () => ({ type: SIGN_OUT });