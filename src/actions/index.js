import restaurants from '../api/restaurants';
import * as types from '../constants/ActionTypes';

const receiveRestaurants = data => ({
  type: types.RESTAURANTS_RESPONSE,
  restaurants: data.restaurants.map(r => r.restaurant)
});

const requestRestaurants = () => ({
  type: types.RESTAURANTS_REQUEST
});

export const fetchRestaurants = () => dispatch => {
  dispatch(requestRestaurants());
  return restaurants.getAll()
    .then(response => dispatch(receiveRestaurants(response)));
};

export const toggleVisited = id => ({
  type: types.RESTAURANT_TOGGLE_VISITED,
  id
});
