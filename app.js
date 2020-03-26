var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var firebaseRealTimeDBRouter = require('./routes/firebaseRealTimeDB');
var firebaseFirestoreRouter = require('./routes/firebaseFireStore');
var firebaseAuthenticationRouter = require('./routes/firebaseAuthentication');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/firebaseRDB', firebaseRealTimeDBRouter);
app.use('/firebaseFirestore', firebaseFirestoreRouter);
app.use('/firebaseAuthentication', firebaseAuthenticationRouter);

module.exports = app;
