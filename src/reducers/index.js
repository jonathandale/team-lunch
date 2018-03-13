import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';
import remove from 'lodash/remove';
import haversine from 'haversine';

const VISITED_KEY = 'team-lunch-visited';

// Initial restaurant state
const initialState = {
  restaurants: [],
  isFetching: false,
  officeCoords: {
    latitude: 38.0251898,
    longitude: -78.4834939
  }
};

// Reducer for handling restaurant request/response
const restaurants = (state = initialState, action) => {
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
        restaurants: action.restaurants.map(restaurant => {
          let {latitude, longitude} = restaurant.location;
          // Add distance from office to restaurant
          restaurant.distanceFromOffice = haversine(
            state.officeCoords,
            {latitude, longitude},
            {unit: 'mile'}
          );
          return restaurant;
        })
      }
    default:
      return state;
  }
}

const localVisited = localStorage.getItem(VISITED_KEY);
const initialVisited = !!localVisited ? localVisited.split(',') : [];
const visited = (state = initialVisited, action) => {
  if(action.type === types.RESTAURANT_TOGGLE_VISITED) {
    // Is the restaurant id already in visited state?
    let hasVisited = state.indexOf(action.id) > -1;
    // If it's a restaurant that has been visited, remove
    let newIds = hasVisited ?
      remove(state, id => { return id !== action.id; })
      : [...state, action.id];
    //This shouldn't go here. No side-effects!
    localStorage.setItem(VISITED_KEY, newIds);
    return newIds;
  }
  return state;
}

const rootReducer = combineReducers({
  restaurants,
  visited
});

export default rootReducer;
