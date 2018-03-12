import React, { Component } from 'react';
import PropTypes from 'prop-types';
import repeat from 'lodash/repeat';
import classNames from 'classnames';

export default class Restaurant extends Component {
  render() {
    const {name, price_range, user_rating, visited, onClick} = this.props;
    let btnClasses = classNames('text-white', 'font-bold', 'py-2', 'px-4', 'rounded',
                                {'bg-blue': !visited, 'bg-grey': visited},
                                {'hover:bg-blue-dark': !visited, 'hover:bg-grey-dark': visited});
    return (
      <li className="bg-white p-4 border-grey-lighter border-t border-b">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg">{name}</p>
            <p className="text-sm text-grey-dark">{repeat('$', price_range)}</p>
            <p className="text-sm text-teal">{repeat('★', Math.round(user_rating.aggregate_rating))}</p>
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
