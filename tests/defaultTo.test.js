import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {
  test('returns default when value is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });
});