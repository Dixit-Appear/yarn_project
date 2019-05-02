import { capitalize } from './capitalize.js';

function greet(firstName) {
  return `Hello ${capitalize(firstName)}`;
}

export default greet;
