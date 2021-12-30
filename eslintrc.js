const config = require('./index');

config.parserOptions = {
  project: './tsconfig.json',
  sourceType: 'module',
};

module.exports = config;
