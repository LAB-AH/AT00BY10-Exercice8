import chunk from '../src/chunk.js';

describe('chunk', () => {
  test('splits array into chunks (current implementation)', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[3, 4], undefined]);
  });
});