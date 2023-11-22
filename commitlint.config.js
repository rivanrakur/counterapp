module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['chore', 'docs', 'fix', 'feat', 'refactor']],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'always', 'never'],
    'type-empty': [2, 'always', 'never'],
  },
};
