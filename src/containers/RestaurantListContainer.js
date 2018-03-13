import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
import { toggleVisited } from '../actions';
import partition from 'lodash/partition';
import sortBy from 'lodash/sortBy';

// Filter for not bad food
const filterByRating = restaurants => {
  return restaurants.filter(
    restaurant => parseInt(restaurant.user_rating.aggregate_rating, 10) >= 2.5
  );
};

// Filter within 10 miles of the office
const filterByDistance = restaurants => {
  return restaurants.filter(restaurant => restaurant.distanceFromOffice < 10);
};

const getRestaurants = ({restaurants}, visitedIds) => {
  let filteredByRating = filterByRating(restaurants);
  let filteredByDistance = filterByDistance(filteredByRating);
  // Sort by rating, then distance
  let sorted = sortBy(filteredByDistance, [(r) => -Math.round(r.user_rating.aggregate_rating),
                                           (r) => r.distanceFromOffice]);
  // Split into two lists, visited & not visited
  let [visited, notVisited] = partition(sorted, (restaurant) => {
    return visitedIds.indexOf(restaurant.id) > -1;
  });

  return {
    visited,
    notVisited
  };
};

const mapStateToProps = state => {
  return {
    restaurants: getRestaurants(state.restaurants, state.visited),
    isFetching: state.restaurants.isFetching
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onRestaurantClick: id => {
      dispatch(toggleVisited(id))
    }
  }
};

const RestaurantListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantList);

export default RestaurantListContainer;
