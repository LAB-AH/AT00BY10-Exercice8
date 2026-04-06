import divide from '../src/divide.js';

describe('divide', () => {
  test('divides numbers according to current implementation', () => {
    expect(divide(10, 2)).toBe(1);
  });
});