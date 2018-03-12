import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

// Initial state
const initialState = {
  restaurants: [],
  isFetching: false
};

// Reducer for handling restaurant request/response
function restaurants(state = initialState, action) {
  switch(action.type) {
    case types.RESTAURANTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.RESTAURANTS_RESPONSE:
      return {
        ...state,
        isFetching: false,
        restaurants: action.restaurants
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  restaurants
});

export default rootReducer;
