import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    entry: './src/vue-chat-scroll.js',
    dest: './dist/vue-chat-scroll.js',

    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['es2015-rollup']
        })
    ],

    format: 'umd',
    moduleName: 'vue-chat-scroll'
}