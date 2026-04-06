import clamp from '../src/clamp.js';

describe('clamp', () => {
  test('clamps value according to current implementation', () => {
    expect(clamp(5, 0, 10)).toBe(0);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(20, 0, 10)).toBe(0);
  });
});