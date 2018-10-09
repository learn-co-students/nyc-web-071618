import UUID from 'uuid';
import { ADD_USER, UPDATE_ANIMAL } from './types';
import AnimalAdapter from '../apis/AnimalAdapter';

// action creators create actions
export function addUser(name, email, animalPreference) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email, animalPreference }
  }
}

export function updateAnimal(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}

export function fetchDog() {
  return (dispatch) => {
    console.log("I'm a function");
    dispatch({ type: "FETCHING_DOG" })
    AnimalAdapter.getDog()
     .then(url => {
       console.log('hello?');
       dispatch(updateAnimal(url));
       dispatch({ type: "FETCHED_DOG" });
      })
  }
  // return AnimalAdapter.getDog()
  //  .then(url => {
  //    // how can we do that??
  //    // dispatch(updateAnimalAction(url));
  //    return url
  //   })
}
