import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';

const RestaurantList = ({restaurants, onRestaurantClick}) => (
  <div className="m-8">
    <h3 className="mb-2 font-normal">Not yet visited</h3>
    <ul className="list-reset">
      {restaurants.notVisited.map(restaurant =>
        <Restaurant key={restaurant.id} {...restaurant} onClick={() => onRestaurantClick(restaurant.id)} />
      )}
    </ul>
    <h3 className="mt-6 mb-2 font-normal">Been there, done that</h3>
    <ul className="list-reset">
      {restaurants.visited.map(restaurant =>
        <Restaurant key={restaurant.id} {...restaurant} visited onClick={() => onRestaurantClick(restaurant.id)} />
      )}
    </ul>
  </div>
);

RestaurantList.propTypes = {
  restaurants: PropTypes.object.isRequired,
  onRestaurantClick: PropTypes.func.isRequired
};

export default RestaurantList;
