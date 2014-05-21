
/**
 * Module dependencies
 */

var express = require('express'),
  http = require('http'),
  path = require('path'),
  argv = require('optimist').argv,

  routes = require('./routes'),
  api = require('./routes/api'),
  config = require('./config_' + (process.env.NODE_ENV || 'dev'));

var app = module.exports = express();

/**
 * Configuration
 */

app.set('port', argv.port || process.env.PORT || config.port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

/**
 * Routes
 */

// Index
app.get('/', routes.index);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
