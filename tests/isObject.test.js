import isObject from '../src/isObject.js';

test('isObject', () => {
  expect(isObject({})).toBe(true);
});