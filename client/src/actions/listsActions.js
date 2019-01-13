import {ADD_LIST, CHANGE_MODE, UPDATE_VALUE} from './types.js';
import axios from 'axios';

export const addList = value => dispatch => {
  axios.post('/api/addList', {
    value: value
  }).then(res => {
    dispatch({ type: ADD_LIST, payload: res });
    dispatch({ type: UPDATE_VALUE, payload: null});
  })


}

export const changeMode = (event, mode) => dispatch => {
  if (mode === 'edit') {
    event.target.style.border = '3px solid #00b233';
    event.target.style.cursor = 'text';
  } else if (mode === 'read' && event) {
    event.target.style.border = 'none';
    event.target.style.cursor = 'pointer';
  }
  dispatch({ type: CHANGE_MODE, payload: mode });
}

export const updateValue = event => dispatch => {
  dispatch({ type: UPDATE_VALUE, payload: event });
}
