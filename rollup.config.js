// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: './src/vue-chat-scroll.js',
  output: {
    file: './dist/vue-chat-scroll.js',
    format: 'umd',
    name: 'vue-chat-scroll'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};
