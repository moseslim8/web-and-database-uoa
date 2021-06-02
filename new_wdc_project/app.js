var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var history = require('connect-history-api-fallback');
var mysql = require('mysql');

var app = express();
var staticFileMiddleware = express.static(path.join(__dirname, 'public'));
var apiRouter = require('./routes/api');
var dbConnectionPool = mysql.createPool({ host: 'localhost',database: 'group_assignment', multipleStatements: true});

app.use(function(req, res, next) { 
    req.pool = dbConnectionPool; 
    next(); 
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', apiRouter);
app.use(staticFileMiddleware);
app.use(history());
app.use(staticFileMiddleware);
// This ^ is how the history middleware is supposed to be setup

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // return the error as json
    res.status(err.status || 500);
    res.status(500).json({
        message: err.message,
        error: err
    });
});

module.exports = app;
