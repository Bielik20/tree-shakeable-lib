import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import { dtsBundle, tscpaths } from './tools/rollup-plugins'

const pkg = require('./package.json')
const libraryName = 'tree-shakeable-lib'
const includeTypes = !process.env.NO_TYPES

const common = {
  watch: {
    include: 'src/**'
  }
}

const corePlugins = [
  // Allow json resolution
  json(),
  // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
  commonjs(),
  // Allow node_modules resolution, so you can use 'external' to control
  // which external modules to include in the bundle
  // https://github.com/rollup/rollup-plugin-node-resolve#usage
  resolve(),
  // Resolve source maps to the original source
  sourceMaps()
]

const typesPlugins = includeTypes
  ? [
      dtsBundle({ main: 'dist/types/core/index.d.ts', out: 'modules/core.d.ts' }),
      dtsBundle({ main: 'dist/types/products/index.d.ts', out: 'modules/products.d.ts' }),
      tscpaths({ out: 'modules' })
    ]
  : []

const targets = {
  modules: {
    ...common,
    input: {
      core: `src/core/index.ts`,
      products: `src/products/index.ts`
    },
    output: { dir: 'modules', format: 'esm', sourcemap: true },
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      ...corePlugins,
      typescript({
        check: false,
        useTsconfigDeclarationDir: true,
        tsconfigOverride: { compilerOptions: { declaration: includeTypes } }
      }),
      ...typesPlugins
    ]
  },

  esm: {
    ...common,
    input: 'src/index.ts',
    output: { file: pkg.module, format: 'esm', sourcemap: true },
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      ...corePlugins,
      typescript({
        check: false,
        useTsconfigDeclarationDir: true,
        tsconfigOverride: { compilerOptions: { declaration: includeTypes } }
      }),
      tscpaths({ out: 'dist/types' })
    ]
  },

  umd: {
    ...common,
    input: 'src/index.ts',
    context: 'window',
    output: { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true },
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    plugins: [...corePlugins, typescript({ check: false }), uglify()]
  }
}

const targetKeys = process.env.TARGET ? [process.env.TARGET] : Object.keys(targets)

export default targetKeys.map(key => targets[key])
