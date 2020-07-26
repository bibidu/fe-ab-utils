import common from 'rollup-plugin-commonjs'

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [ common() ]
};