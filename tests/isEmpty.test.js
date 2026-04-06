import isEmpty from '../src/isEmpty.js';

test('isEmpty', () => {
  expect(isEmpty([])).toBe(true);
});