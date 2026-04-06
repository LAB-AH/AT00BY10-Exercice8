import eq from '../src/eq.js';

describe('eq', () => {
  test('compares values', () => {
    expect(eq(1, 1)).toBe(true);
  });
});