import {ADD_LIST_SUCCESS, ADD_LIST_FAILURE, UPDATE_LIST_SUCCESS, UPDATE_LIST_FAILURE,
   FETCH_LISTS_SUCCESS, FETCH_LISTS_FAILURE, CHANGE_MODE, UPDATE_VALUE} from './types.js';
import axios from 'axios';

export const addList = text => dispatch => {
  axios.post('/api/addList', {
    text: text
  }).then((res, err) => {
    if (err) {
      dispatch(addListFailure(err));
    } else {
      dispatch(addListSuccess(res));
    }
    dispatch({ type: UPDATE_VALUE, payload: null});
  })
}

export const addListSuccess = res => {
  return {
    type: ADD_LIST_SUCCESS,
    res
  }
}

export const addListFailure = err => {
  return {
    type: ADD_LIST_FAILURE,
    err
  }
}

export const updateList = (event, id) => dispatch => {
  event.persist();
  dispatch({ type: CHANGE_MODE, payload: 'read'});
  event.target.style.border = 'none';
  event.target.style.cursor = 'pointer';
  axios.post('/api/updateList', {
    payload: event.target.value,
    id: id
  }).then((res, err) => {
    if (err) {
      dispatch(updateListFailure(err));
    } else {
      dispatch(updateListSuccess(res));
    }
  });
}

export const updateListSuccess = res => {
  return {
    type: UPDATE_LIST_SUCCESS,
    res
  }
}

export const updateListFailure = err => {
  return {
    type: UPDATE_LIST_FAILURE,
    err
  }
}

export const fetchLists = () => dispatch => {
  axios.get('/api/fetchLists').then((res, err) => {
    if (err) {
      dispatch(fetchListsFailure(err));
    } else {
      dispatch(fetchListsSuccess(res));
    }
  });
}

export const fetchListsSuccess = res => {
  return {
    type: FETCH_LISTS_SUCCESS,
    res
  }
}

export const fetchListsFailure = err => {
  return {
    type: FETCH_LISTS_FAILURE,
    err
  }
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
