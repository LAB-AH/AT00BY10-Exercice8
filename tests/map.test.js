import map from '../src/map.js';

test('map', () => {
  const result = map([1, 2], x => x * 2);
  expect(result[0]).toBe(2);
});