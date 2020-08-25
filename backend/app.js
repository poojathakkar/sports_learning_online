const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const usersRegister = require('./routes/register');
const usersLogin = require('./routes/login');
const coursesList = require('./routes/coursesList');
const searchCourse = require('./routes/searchCourse');
const addToCart = require('./routes/addToCart');
const removeFromCart = require('./routes/removeFromCart');


const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
//app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
// Encrypted cookies
app.use(cookieSession({
  name: 'session',
  keys: ['f080ac7b-b838-4c5f-a1f4-b0a9fee10130', 'c3fb18be-448b-4f6e-a377-49373e9b7e1a']
}));
app.use('/', indexRouter(db));
app.use('/users', usersRouter(db));
app.use('/api/register', usersRegister(db));
app.use('/api/login', usersLogin(db));
app.use('/api/coursesList', coursesList(db));
app.use('/api/searchCourse', searchCourse(db));
app.use('/api/addToCart', addToCart(db));
app.use('/api/removeFromCart', removeFromCart(db));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
//session handling
app.use(function (req, res) {
  //req.session['user_id'] = null;
})
module.exports = app;