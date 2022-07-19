const { relative } = require('path');
const validate = require('validate-npm-package-name');

module.exports = {
  prompts: require('./prompts'),
  actions() {
    const validation = validate(this.answers.name);
    validation.warnings &&
      validation.warnings.forEach((warn) => {
        console.warn('Warning:', warn);
      });
    validation.errors &&
      validation.errors.forEach((err) => {
        console.error('Error:', err);
      });
    validation.errors && validation.errors.length && process.exit(1);

    const actions = [
      {
        type: 'add',
        files: '**',
        templateDir: 'template/base',
      },
      {
        type: 'move',
        patterns: {
          gitignore: '.gitignore',
          env: '.env',
          // If we use `package.json` directly
          // Then `template` folder will be treated as a package too, which isn't safe
          '_package.json': 'package.json',
          'eslintrc.cjs': '.eslintrc.cjs',
        },
      },
    ];

    // user wants Vuepress for hosting docs
    if (this.answers.docs !== false) {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: 'template/features/docs',
      });
      // If user wants to deploy vuepress docs on
      if (this.answers.netlify !== false) {
        actions.push({
          type: 'add',
          files: '**',
          templateDir: 'template/features/netlify',
        });
      }
    }

    return actions;
  },
  async completed() {
    this.gitInit();

    await this.npmInstall({
      npmClient: 'npm',
      installArgs: ['--force', '--prefer-offline', '--no-audit'],
    });

    const chalk = this.chalk;
    const isNewFolder = this.outDir !== process.cwd();
    const relativeOutFolder = relative(process.cwd(), this.outDir);
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : '';

    console.log(
      chalk`\n🎉  {bold Successfully created project} {cyan ${this.answers.name}}\n`,
    );

    console.log(chalk`  {bold To build & start for production:}\n`);
    console.log(chalk`${cdMsg}\t{cyan npm run build}`);
    console.log(chalk`\t{cyan npm run release:prepare}\n`);

    console.log(chalk`  {bold To test:}\n`);
    console.log(chalk`${cdMsg}\t{cyan npm run test}\n`);
  },
};
