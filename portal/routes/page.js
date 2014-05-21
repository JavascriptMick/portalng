var config = require('../config_' + (process.env.NODE_ENV || 'dev'));

exports.index = function(req, res){
  res.render('index', {applets:config.applets});
};

exports.layout = function(req, res){
  res.render('layout');
};