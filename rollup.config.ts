import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'

const pkg = require('./package.json')

const libraryName = 'tree-shakeable-lib'

function base(declaration = false) {
  return {
    input: `src/index.ts`,
    watch: {
      include: 'src/**'
    },
    plugins: [
      // Allow json resolution
      json(),
      // Compile TypeScript files
      typescript({
        check: false,
        useTsconfigDeclarationDir: true,
        tsconfigOverride: { compilerOptions: { declaration } }
      }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),

      // Resolve source maps to the original source
      sourceMaps()
    ]
  }
}

const targets = {
  es: {
    ...base(true),
    output: [{ file: pkg.module, format: 'es', sourcemap: true }],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})]
  },
  umd: {
    ...base(),
    output: [{ file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true }],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    plugins: [...base().plugins, uglify()]
  }
}

const targetKeys = process.env.TARGET ? [process.env.TARGET] : Object.keys(targets)

export default targetKeys.map(key => targets[key])
