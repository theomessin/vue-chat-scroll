import { uglify } from 'rollup-plugin-uglify';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/vue-chat-scroll.js',
    name: 'vue-chat-scroll',
    format: 'umd',
  },
  plugins: [
    typescript(),
    uglify(),
  ],
};
