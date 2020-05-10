<center>
  <img src="assets/logo.png" height="200px" />
</center>

# Janak

- A simple Vue package generator (using [Sao.js](https://saojs.org/))

> Quickly scaffold a new Vue 2.x package (with [@vue/composition-api](https://vue-composition-api-rfc.netlify.app/#api-introduction)) without all the headache of setting it up from scratch

## Features
- _🎉[Composition API](template/_package.json#L32) baked in_
- _👨‍🔧[TypeScript](template/src/Package.vue#L7) support_
- _🎢Build everything using [Rollup](template/build/rollup.config.js)_
- _🏗Trigger publishing on npm registry using [ship.js](https://community.algolia.com/shipjs/guide/getting-started.html)_
- _🧪Ava 3.x for testing - [e2e](template/e2e.config.cjs) & [unit](template/unit-tests.config.cjs)_
- _🥳[Prettier](template/.prettierrc) & [ESLint](template/.eslintrc.js) give you powerful linting_
- _👀[jsconfig](template/jsconfig.json) for that dope `@/` importing power_
- _🦮[Husky](template/husky.config.js) & [Commitlint](template/commitlint.config.js)_
- _🤖GitHub Actions [CI](template/.github/workflows/shipjs-trigger.yml) for auto-publishing_
- _🤖[Dependabot](template/.dependabot/config.yml) for keeping packages upto date_


## Usage

```bash
npx janak <your-package>
```

## Notes
- Janak (in Hindi) translates to generator, hence the name.
- Special thanks to @egoist, @znck0

## License

MIT &copy; [Vinayak](https://vinayakkulkarni.dev)
