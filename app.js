//necessary libraries
var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

//location of js scripts for routing purposes
//var usersRouter = require('./controllers/users')
var queryRouter = require('./controllers/query')
var connectRouter = require('./controllers/connect')

//initialize express
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//useful libraries
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//routes
//app.use('/users', usersRouter)
app.use('/', queryRouter)
app.use('/connect', connectRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
});

//export the module
//CommonJS semantics (require and module.exports)
//has a few strange semantics like . or ..
module.exports = app