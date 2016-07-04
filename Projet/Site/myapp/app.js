var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'); //new
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Site');

///////////////////////
/*      Routes       */
///////////////////////

var routes = require('./routes/index'); //brains
var rechercheBoire = require('./routes/rechercheBoire');
var rechercheManger = require('./routes/rechercheManger');
var rechercheSortir = require('./routes/rechercheSortir');
var contact = require('./routes/contact');
var login = require('./routes/login');
var sortir = require('./routes/sortir');
var boire = require('./routes/boire');
var manger = require('./routes/manger');
var inscription = require('./routes/inscription');
var profil = require('./routes/profil');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(session({secret: 'antoine'}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/rechercheBoire', rechercheBoire);
app.use('/rechercheManger', rechercheManger);
app.use('/rechercheSortir', rechercheSortir);
app.use('/contact', contact);
app.use('/login', login);
app.use('/sortir',sortir);
app.use('/boire',boire);
app.use('/manger',manger);
app.use('/inscription',inscription);
app.use('/profil',profil);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

//Affiche les erreurs  
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
