import toNumber from '../src/toNumber.js';

test('toNumber', () => {
  expect(toNumber('5')).toBe(5);
});