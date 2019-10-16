import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: 'src/main.ts',
    output: {
      file: 'lib/main.js',
      format: 'cjs'
    },
    plugins: [typescript(), resolve()]
  }
];
