import React, { Component } from 'react';
import PropTypes from 'prop-types';
import times from 'lodash/times';
import classNames from 'classnames';

const rangeMaker = (symbol, val, max) => {
  return times(max, (n) => {
    let classes = classNames('text-sm', 'inline-block', {'opacity-25': n >= val});
    return <span key={n} className={classes}>{symbol}</span>;
  });
};

export default class Restaurant extends Component {
  render() {
    const {name, price_range, user_rating,
           visited, onClick, distanceFromOffice } = this.props;

    let btnClasses = classNames('text-white', 'font-bold', 'py-2', 'px-4', 'rounded',
                                {'bg-blue': !visited, 'bg-grey': visited},
                                {'hover:bg-blue-dark': !visited, 'hover:bg-grey-dark': visited});
    return (
      <li className="bg-white p-4 border-grey-lighter border-t border-b">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-lg">{name}</p>
            <div className="mr-3 text-grey-dark inline-block">{rangeMaker('$', price_range, 5)}</div>
            <div className="text-teal inline-block">{rangeMaker('★', Math.round(user_rating.aggregate_rating), 5)}</div>
            <p className="text-sm text-grey-dark mt-2">{distanceFromOffice.toFixed(2)} miles from the office</p>
          </div>
          <button className={btnClasses} onClick={onClick}>{visited ? `Didn't eat here` : `Eat here`}</button>
        </div>
      </li>
    )
  }
};

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  price_range: PropTypes.number.isRequired,
  user_rating: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
