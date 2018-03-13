import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import restaurants from '../api/restaurants';
import * as actions from './index';
import * as types from '../constants/ActionTypes';
 
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../api/restaurants.js', ()=> ({getAll: jest.fn()}));
 
describe('async actions', () => {
  it('creates appropriate actions when fetching restaurants', () => { 

    // Mock the simulated api response
     restaurants.getAll.mockImplementation(() => {
      return new Promise(resolve => resolve(
        {restaurants: [{restaurant: {name: 'Pie shop'}}]}
      ))
    });

    const expectedActions = [
      { type: types.RESTAURANTS_REQUEST },
      { type: types.RESTAURANTS_RESPONSE, restaurants: [{name: 'Pie shop'}]}
    ];

    const store = mockStore({ restaurants: [] });
 
    return store.dispatch(actions.fetchRestaurants()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })
});
