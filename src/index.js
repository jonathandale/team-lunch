import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App';
import { fetchRestaurants } from './actions';
import { RESTAURANT_TOGGLE_VISITED } from './constants/ActionTypes';

const middleware = [ thunk ];
const VISITED_KEY = 'team-lunch-visited';

// Local storage middleware
const storeIds = store => next => action => {
  let result = next(action)
  if(action.type === RESTAURANT_TOGGLE_VISITED) {
    localStorage.setItem(VISITED_KEY, store.getState().visited);
  }
  return result
};

middleware.push(storeIds);

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

// Send initial request to get restaurants
store.dispatch(fetchRestaurants());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
