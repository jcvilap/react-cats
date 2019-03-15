import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import catsReducer from './catsReducer';

const rootReducer = (history) => combineReducers({
  auth: authReducer,
  cats: catsReducer,
  router: connectRouter(history),
});

export default rootReducer;