import every from '../src/every.js';

test('every', () => {
  expect(every([true, true], Boolean)).toBe(true);
});