/*
 * Serve JSON to our AngularJS client
 */
var config = require('../config_' + (process.env.NODE_ENV || 'dev'));

exports.get = function (req, res) {
  res.json(config.applets);
};