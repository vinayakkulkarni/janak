module.exports = {
  prompts: require('./prompts'),
  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        env: '.env',
        // If we use `package.json` directly
        // Then `template` folder will be treated as a package too, which isn't safe
        '_package.json': 'package.json'
      }
    }
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall({ npmClient: 'npm' })
    this.showProjectTips()
  }
}
