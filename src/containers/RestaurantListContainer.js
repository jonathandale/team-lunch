import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
import { toggleVisited } from '../actions';
import partition from 'lodash/partition';

// Filter restaurants that fit the criteria:
// - Rating better or equal to 2.5
const getRestaurants = ({restaurants}, visitedIds) => {
  let filtered = restaurants.filter(restaurant =>
    parseInt(restaurant.user_rating.aggregate_rating, 10) >= 2.5
  );
  let [visited, notVisited] = partition(filtered, (restaurant) => {
    return visitedIds.indexOf(restaurant.id) > -1;
  });

  return {
    visited,
    notVisited
  };
};

const mapStateToProps = state => {
  return {
    restaurants: getRestaurants(state.restaurants, state.visited)
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
