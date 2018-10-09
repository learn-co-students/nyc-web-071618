import { UPDATE_ANIMAL } from '../types';

const initialAnimalState = {
  animalSrc: null,
  loading: true,
};

export default function animalReducer(state = initialAnimalState, action) {
  console.log('%c animalReducer', 'color:blue', action);
  switch(action.type) {
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };
    // POST_ANIMAL
    // FIND_ANIMAL
    // FEED_ANIMAL
    // MATE_ANIMAL
    case "FETCHING_DOG":
      return { ...state, loading: true }
    case "FETCHED_DOG":
      return { ...state, loading: false }
    case "RESET":
      return initialAnimalState;
    default:
      return state;
  }
}
