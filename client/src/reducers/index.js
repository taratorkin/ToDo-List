import { combineReducers } from 'redux';
import auth from './authReducer';
import lists from './listsReducer';

const allReducers = combineReducers({
  auth: auth,
  lists: lists
});

export default allReducers;
