import camelCase from '../src/camelCase.js';

test('camelCase', () => {
  expect(camelCase('hello world')).toBe(' helloWorld');
});