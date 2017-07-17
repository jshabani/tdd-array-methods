const assert = require('assert');
const array = require('../lib/array');

describe('array methods', () => {

  it ('does something to each item in an array and returns a new array', () => {
    const sampleArray = [1, 4, 5, 7];
    const mappedArray = arrayObj.map(sampleArray, (item, index) => item * item);
    assert.deepEqual(mappedArray, [1,16,25,42]);
  });

  it ('filters through an array and creates a new array with values that are truthy per a callback function', () => {
    const testArray = [1,4,5,7];
    const filteredArray = arrayObj.filter(sampleArray, (item, index) => item % 3 === 0
    );
    assert.deepEqual(filteredArray, [25, 49]);
  });

