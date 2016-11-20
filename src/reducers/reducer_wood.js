import { FETCH_WOOD } from '../actions/index';

const INITIAL_STATE = { all: [], product: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

    case FETCH_WOOD:

      return {...state, all: action.payload.data }; // ...state will return the current state then add all data

    default:
      return state;
  }
}
