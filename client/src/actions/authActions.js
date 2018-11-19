import axios from 'axios';
import {FETCH_USER} from './types.js';

export const fetchUser = () => dispatch => {
    axios.get('/api/currentUser')
      .then(res => {
        dispatch({ type: FETCH_USER, payload: res})
      });
  }
