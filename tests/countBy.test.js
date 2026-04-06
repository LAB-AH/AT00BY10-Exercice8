import countBy from '../src/countBy.js';

test('countBy according to current implementation', () => {
  const result = countBy([1, 2, 3], x => x % 2);
  expect(result[1]).toBe(1);
});