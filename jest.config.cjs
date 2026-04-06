module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!src/.internal/**'],
  coverageReporters: ['text', 'lcov'],
  transform: {},
};