import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';

const RestaurantList = ({restaurants}) => (
  <div className="m-8">
    <ul className="list-reset">
      {restaurants.map(restaurant =>
        <Restaurant key={restaurant.id} {...restaurant} />
      )}
    </ul>
  </div>
);

RestaurantList.propTypes = {
  restaurants: PropTypes.array.isRequired
};

export default RestaurantList;
