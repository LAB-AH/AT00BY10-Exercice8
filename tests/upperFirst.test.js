import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
  test('uppercases first character', () => {
    expect(upperFirst('world')).toBe('World');
  });
});