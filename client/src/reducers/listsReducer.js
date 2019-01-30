
const initialState = {
  listMode: 'read',
  inputValue: '',
  listsArray: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_LIST_SUCCESS':
      return { ...state, listsArray: action.res.data.lists };
    case 'ADD_LIST_FAILURE':
      return { ...state };
    case 'FETCH_LISTS_SUCCESS':
      return { ...state, listsArray: action.res.data.lists };
    case 'FETCH_LISTS_FAILURE':
      return { ...state };
    case 'UPDATE_LIST_SUCCESS':
      return { ...state, listsArray: action.res.data.lists};
    case 'UPDATE_LIST_FAILURE':
      return { ...state };
    case 'CHANGE_MODE':
      return { ...state, listMode: action.payload, inputValue: action.value };
    case 'UPDATE_VALUE':
      if (action.payload === null) {
        return { ...state, inputValue: '' }
      } else {
        return { ...state, inputValue: action.payload.target.value };
      }
    default:
      return state;
  }
}
