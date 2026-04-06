import filter from '../src/filter.js';

test('filter', () => {
  const result = filter([1, 2, 3], x => x > 1);
  expect(result.length).toBe(2);
});