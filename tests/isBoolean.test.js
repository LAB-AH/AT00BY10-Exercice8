import isBoolean from '../src/isBoolean.js';

test('isBoolean', () => {
  expect(isBoolean(true)).toBe(true);
});