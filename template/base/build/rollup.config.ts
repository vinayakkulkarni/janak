import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue';
import pkg from '../package.json';

const extensions = ['.js', '.ts', '.vue'];

const plugins = [
  alias({
    entries: {
      vue: 'vue/dist/vue.runtime.esm.js',
    },
  }),
  resolve({
    extensions,
    browser: true,
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  commonjs({
    extensions,
    include: 'node_modules',
    exclude: 'src/**',
  }),
  vue({ css: false }),
  scss({
    output: 'dist/<%= name %>.css',
  }),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  }),
  beep(),
];

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * (c) ${new Date().getFullYear()} ${pkg.author.name}<${pkg.author.email}>
 * Released under the ${pkg.license} License
 */
`;

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '<%= name %>',
      file: 'dist/<%= name %>.esm.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      banner,
    },
    {
      name: '<%= name %>',
      file: 'dist/<%= name %>.cjs.js',
      exports: 'named',
      sourcemap: true,
      banner,
    },
    {
      name: '<%= name %>',
      file: 'dist/<%= name %>.js',
      format: 'umd',
      exports: 'named',
      sourcemap: true,
      banner,
      globals: {
        vue: 'vue',
        '@vue/composition-api': 'vueCompositionApi',
      },
    },
  ],
  plugins,
  external: ['vue', '@vue/composition-api'],
};
