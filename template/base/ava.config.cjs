module.exports = {
  require: ['./test/helpers/ava.setup.js'],
  files: ['./test/spec/**/*'],
  ignoredByWatcher: ['!**/*.{js,vue}'],
  snapshotDir: './test/snapshot',
  babel: true,
  tap: true,
  verbose: true,
  color: true,
};
