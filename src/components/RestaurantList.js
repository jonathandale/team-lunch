import React from 'react';
import PropTypes from 'prop-types';

const RestaurantList = ({restaurants}) => (
  <div className="m-2">
    <h3>List of restaurants:</h3>
    <ul className="list-reset">
      {restaurants.map((restaurant, i) =>
        <li key={i}
            className="pb-2 pt-2">
         {restaurant.name}</li>
      )}
    </ul>
  </div>
);

RestaurantList.propTypes = {
  restaurants: PropTypes.array.isRequired
};

export default RestaurantList;
