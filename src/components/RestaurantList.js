import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';

const printRunWay = notVisited => {
  return (notVisited.length > 0) ?
    `That's enough for another ${(notVisited.length/52).toFixed(2)} years.`
    : `You may have to broaden your horizons :)`;
};

const printTitle = notVisited => {
  let s = notVisited.length === 1 ? '' : 's';
  let n = notVisited.length || 'no';
  return `You have ${n} resturant${s} left to visit!`;
};

export default class RestaurantList extends Component {
  render() {
    const {restaurants, onRestaurantClick, isFetching} = this.props;
    return (
      <div className="m-8">
        {!isFetching &&
          <div>
            <h3 className="pl-4 font-normal text-2xl">{printTitle(restaurants.notVisited)}</h3>
            <p className="text-sm text-grey-darkest pb-4 pl-4">{printRunWay(restaurants.notVisited)}</p>
            <ul className="list-reset mt-4">
            {restaurants.notVisited.map(restaurant =>
              <Restaurant key={restaurant.id} {...restaurant} onClick={() => onRestaurantClick(restaurant.id)} />
            )}
            </ul>
          </div>
        }
        {
          (!isFetching && restaurants.visited.length > 0) &&
          <div>
            <h3 className="mt-6 p-4 mb-2 font-normal">Already visited</h3>
            <ul className="list-reset">
            {restaurants.visited.map(restaurant =>
              <Restaurant key={restaurant.id} {...restaurant} visited onClick={() => onRestaurantClick(restaurant.id)} />
            )}
            </ul>
          </div>
        }
      </div>
    )
  }
};

RestaurantList.propTypes = {
  restaurants: PropTypes.object.isRequired,
  onRestaurantClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};
