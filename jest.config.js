module.exports = {
  testEnvironment: 'node',
  projects: ['<rootDir>/jest.integration.config.ts', '<rootDir>/jest.unit.config.ts'],
  testMatch: ['**/tests/integration/*.test.ts', '**/tests/unit/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
