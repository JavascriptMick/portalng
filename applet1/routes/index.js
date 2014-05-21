
/*
 * GET home page.
 */
 var config = require('../config_' + (process.env.NODE_ENV || 'dev'));


exports.index = function(req, res){
  console.log('rendering the index view')
  res.render('index');
};

// exports.partials = function (req, res) {
//   var name = req.params.name;
//   res.render('partials/' + name);
// };