import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';

// In the future, this will return restaurants with a filter applied
const getRestaurants = ({restaurants}) => {
  return restaurants;
};

const mapStateToProps = state => {
  return {
    restaurants: getRestaurants(state.restaurants)
  }
};

const RestaurantListContainer = connect(mapStateToProps)(RestaurantList);

export default RestaurantListContainer;
