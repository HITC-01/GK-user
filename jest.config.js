module.exports = {
  testRegex: '/src/.*?(Spec)\\.js$',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  verbose: true,
  transform: { '.*': 'babel-jest' },
  collectCoverage: true,
  coverageReporters: [
    'json',
    'html',
    'text',
  ],
  collectCoverageFrom: [
    'client/**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
};
