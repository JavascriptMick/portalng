//*****useage*******
//var config = require('config_' + (process.env.NODE_ENV || 'dev'));

console.log('*** using dev config ***');
exports.port = 3000;
exports.applets = 
[
  {
    name: 'portal',
    url: 'http://localhost:3000'
  },
  {
    name: 'applet1',
    url: 'http://localhost:4000'
  }
];