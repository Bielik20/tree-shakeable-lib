import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import { resolvePaths } from 'tscpaths'

const pkg = require('./package.json')

const libraryName = 'tree-shakeable-lib'

function tscpaths() {
  return {
    onwrite() {
      resolvePaths({
        project: 'tsconfig.json',
        src: './src',
        out: './dist/types'
      })
    }
  }
}

const common = {
  input: `src/index.ts`,
  watch: {
    include: 'src/**'
  }
}

const commonPlugins = [
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

const targets = {
  es: {
    ...common,
    output: [{ file: pkg.module, format: 'es', sourcemap: true }],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      ...commonPlugins,
      typescript({
        check: false,
        useTsconfigDeclarationDir: true,
        tsconfigOverride: { compilerOptions: { declaration: true } }
      }),
      tscpaths()
    ]
  },

  umd: {
    ...common,
    output: [{ file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true }],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    plugins: [...commonPlugins, typescript({ check: false }), uglify()]
  }
}

const targetKeys = process.env.TARGET ? [process.env.TARGET] : Object.keys(targets)

export default targetKeys.map(key => targets[key])
