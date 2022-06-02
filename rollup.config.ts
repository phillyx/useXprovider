import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'

import { DEFAULT_EXTENSIONS } from '@babel/core'
import type { RollupOptions } from 'rollup'
// import { camelCase } from 'lodash-es'

// import pkg from './package.json'

// const pkgName = pkg.name

const paths = {
  input: path.join(__dirname, '/src/index.ts'),
  output: path.join(__dirname, '/dist'),
}
const options: RollupOptions = {
  external: ['vue-demi', '@vueuse/shared'],
  input: paths.input,
  output: [
    // 输出 commonjs 规范的代码
    {
      file: path.join(paths.output, 'index.js'),
      format: 'cjs',
      // name: camelCase(pkgName),
    },
    // 输出 es 规范的代码
    {
      file: path.join(paths.output, 'index.esm.js'),
      format: 'es',
      // name: camelCase(pkgName),
      sourcemap: true,
    },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    nodeResolve({
      // moduleDirectories: ['node_modules'],
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    // Resolve source maps to the original source
    sourceMaps(),

    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**', // 只编译我们的源代码
      // babel 默认不支持 ts 需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, '.ts'],
    }),
  ],
}

export default options
