
const initialState = {
  listMode: 'read',
  inputValue: '',
  listsArray: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_LIST':
      return { ...state, listsArray: action.payload };
    case 'CHANGE_MODE':
      return { ...state, listMode: action.payload };
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
