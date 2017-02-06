var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'vue-chat-scroll.js',
    path: path.resolve(__dirname, 'dist')
  }
};