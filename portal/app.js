
/**
 * Module dependencies
 */

var express = require('express'),
  cors = require('cors'),
  http = require('http'),
  path = require('path'),
  argv = require('optimist').argv,

  applet = require('./routes/applet'),
  pageRoutes = require('./routes/page'),
  
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

// Portal Index page
app.get('/', pageRoutes.index);

// Layout 'wrapper' template for the directive to load
app.get('/layout', cors(), pageRoutes.layout);

// JSON API for serving the available applets
app.get('/api/1.0/applet', cors(), applet.get);

// JSON API for getting and setting context (TODO)
// app.get('/api/1.0/context', context.get);
// app.post('/api/1.0/context', context.post);

// redirect all others to the index (HTML5 history)
app.get('*', pageRoutes.index);

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
