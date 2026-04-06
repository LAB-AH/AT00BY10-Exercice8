import toString from '../src/toString.js';

describe('toString', () => {
  test('converts value to string', () => {
    expect(toString(123)).toBe('123');
  });
});