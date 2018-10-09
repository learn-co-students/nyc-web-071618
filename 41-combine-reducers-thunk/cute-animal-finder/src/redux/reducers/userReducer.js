import { ADD_USER } from '../types';

const initialUserState = {
  users: [],
};

export default function userReducer(state = initialUserState, action) {
  console.log('%c userReducer', 'color:red', action);
  switch(action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    // DELETE_USER
    // UPDATE_USER
    // BAN_USER
    case "RESET":
      return initialUserState;
    default:
      return state;
  }
}
