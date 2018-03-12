import React from 'react';
import PropTypes from 'prop-types';
import repeat from 'lodash/repeat';

const Restaurant = ({name, price_range, user_rating}) => (
  <li className="bg-white p-4 border-grey-lighter border-t border-b">
    <p className="text-lg">{name}</p>
    <p className="text-sm text-grey-dark">{repeat('$', price_range)}</p>
    <p className="text-sm text-teal">{repeat('★', Math.round(user_rating.aggregate_rating))}</p>
  </li>
);

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  priceRange: PropTypes.number,
  userRating: PropTypes.number
};

export default Restaurant;
