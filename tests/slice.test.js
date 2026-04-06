import slice from '../src/slice.js';

test('slice', () => {
  const result = slice([1, 2, 3], 1);
  expect(result[0]).toBe(2);
});