import restaurants from './restaurants.json';
import random from 'lodash/random';

const timeout = () => random(100, 500);

// Simulate async API request
export default {
  getAll: () => new Promise((resolve, reject) => {
    setTimeout(resolve(restaurants), timeout());
  })
}
