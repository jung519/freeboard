var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var helmet = require('helmet');
var router = express.Router();

var board = require('./routes/board');
var common = require('./routes/common');
var comment = require('./routes/comment');
var member = require('./routes/member');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/free-board', { promiseLibrary: require('bluebird') })
  .then(() => console.log('mongodb : connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({
  secret: 'freeboard-session',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
  }
}));
app.use(helmet());

/* board */
app.use('/boards', express.static(path.join(__dirname, 'dist')));
app.use('/board_list/:d_code', express.static(path.join(__dirname, 'dist')));
app.use('/board_detail/:id', express.static(path.join(__dirname, 'dist')));

/* admin */
app.use('/admin', express.static(path.join(__dirname, 'dist')));
app.use('/commonSequence', express.static(path.join(__dirname, 'dist')));

/* member */
app.use('/member', express.static(path.join(__dirname, 'dist')));


/* router */
app.use('/board', board);
app.use('/common', common);
app.use('/comment', comment);
app.use('/member', member);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
