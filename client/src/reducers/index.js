import { combineReducers } from 'redux';
import auth from './authReducer';

const allReducers = combineReducers({
  auth: auth
});

export default allReducers;
