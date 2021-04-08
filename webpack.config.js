const path = require('path');
const MAIN_PATH = './src/main.js';
const OUTPUT_FILE_NAME = 'bundle.js';
const directory =  path.resolve(__dirname, 'public');

module.exports = {
  entry: MAIN_PATH,
  devtool: 'source-map',
  output: {
    filename: OUTPUT_FILE_NAME,
    path: directory,
  },  
  devServer: {
    contentBase: directory,
    watchContentBase: true,
  }  
};
