
/**
 * Module dependencies.
 */

var express = require('express');
var mainRoutes = require('./routes');
var	lab2Routes = require('./routes/lab2');
var	lab3Routes = require('./routes/lab3');
var	lab4Routes = require('./routes/lab4');
var http = require('http');
var path = require('path');

// REST API setup
var employees = require('./api/employees');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Page Route definitions
app.get('/', mainRoutes.index);
app.get('/lab2', lab2Routes.index);
app.get('/lab3', lab3Routes.index);
app.get('/lab4', lab4Routes.index);

// REST API Route Definitions
var baseApiUrl = "/api/employees";
app.get(baseApiUrl, employees.query);
app.get(baseApiUrl + '/:id', employees.get);
app.put(baseApiUrl + '/:id', employees.update);
app.post(baseApiUrl, employees.create);
app.delete(baseApiUrl + '/:id', employees.delete);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
