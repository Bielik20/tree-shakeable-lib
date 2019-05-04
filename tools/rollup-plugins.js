import * as dts from 'dts-bundle'
import { resolvePaths } from 'tscpaths'

export function dtsBundle(options) {
  options.name = options.name || 'tmp'
  options.baseDir = options.baseDir || '.'
  options.outputAsModuleFolder = options.outputAsModuleFolder || true

  return {
    generateBundle() {
      dts.bundle(options)
    }
  }
}

export function classToPure() {
  return {
    renderChunk(code) {
      return {
        code: code.replace(/\/\*\* @class \*\//g, '/*@__PURE__*/'),
        map: null
      }
    }
  }
}

export function tscpaths(options) {
  options.project = options.project || 'tsconfig.json'
  options.src = options.src || 'src'
  options.out = options.out || 'dist'

  return {
    generateBundle() {
      resolvePaths(options)
    }
  }
}
