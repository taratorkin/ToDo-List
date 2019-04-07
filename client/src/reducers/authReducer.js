
export default function(state = {}, action) {
  switch(action.type) {
    case 'FETCH_USER':
      return action.payload.data.userLogged || false;
    default:
      return state;
}
}
