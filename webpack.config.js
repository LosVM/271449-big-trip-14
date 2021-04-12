const path = require('path');
const MAIN_PATH = './src/main.js';
const OUTPUT_FILE_NAME = 'bundle.js';
const publicDirectory =  path.resolve(__dirname, 'public');
const viewDirectory = path.resolve(__dirname, 'src/view/');
const utilsDirectory = path.resolve(__dirname, 'src/utils.js');

module.exports = {
  entry: MAIN_PATH,
  devtool: 'source-map',
  output: {
    filename: OUTPUT_FILE_NAME,
    path: publicDirectory,
  },  
  devServer: {
    contentBase: publicDirectory,
    watchContentBase: true,
  },
  resolve: {
    alias: {
      view: viewDirectory,
      utils: utilsDirectory,
    },
  }, 
};
