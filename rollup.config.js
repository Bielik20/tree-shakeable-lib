import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import { classToPure, instanceToPure, tscpaths } from './tools/rollup-plugins';

const pkg = require('./package.json');

const targets = {
	esm: {
		input: 'src/index.ts',
		output: { file: pkg.module, format: 'esm', sourcemap: true },
		watch: { include: 'src/**' },
		// Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
		external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
		plugins: [
			instanceToPure(),
			json(),
			// Allow json resolution
			commonjs(),
			// Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
			resolve(),
			// Allow node_modules resolution, so you can use 'external' to control
			// which external modules to include in the bundle
			// https://github.com/rollup/rollup-plugin-node-resolve#usage
			sourceMaps(),
			// Resolve source maps to the original source
			postcss({ extract: true }),
			typescript({ useTsconfigDeclarationDir: true }),
			classToPure(),
			tscpaths({ out: 'dist/types' }),
		],
	},
};

export default targets.esm;
