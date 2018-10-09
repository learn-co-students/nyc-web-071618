import { combineReducers } from 'redux';
import { ADD_USER, UPDATE_ANIMAL } from './types';

// combineReducers = it combines reducers

// const initialState = {
//   users: [],
//   animalSrc: null,
// };
//
// export default function reducer(state = initialState, action) {
//   switch(action.type) {
//     case ADD_USER:
//       return { ...state, users: [...state.users, action.payload] };
//     case UPDATE_ANIMAL:
//       return { ...state, animalSrc: action.payload };
//     default:
//       return state;
//   }
// }




export default combineReducers({
  user: userReducer,
  animal: animalReducer,
})
