import compact from '../src/compact.js';

describe('compact', () => {
  test('removes values according to current implementation', () => {
    const result = compact([0, 1, false, 2, '', 3]);

    expect(result.length).toBe(2);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(3);
  });
});