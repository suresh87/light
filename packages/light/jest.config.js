module.exports = {
  // roots: [
  //   '<rootDir>/tests',
  // ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['/node_modules/', '/lib/*', '/src/test.ts'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
};
