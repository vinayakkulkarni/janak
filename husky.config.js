module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'npm run test',
    'pre-push': 'npm run test'
  }
}