//page for building queries with a project
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
//require model for Presto Cluster Credentials
//let presto = require('../models/presto')

//credentials for mysql database
const connection = mysql.createConnection({
  host: 'mysql',
  port: 3306,
  user: 'schemeuser',
  password: 'userscheme',
  database: 'schememodels'
})

/* GET query page. */
router.get('/', function(req, res, next) {
  res.render('connect')
})

//handle new credentials being input
router.post('/create', function(req, res, next) {
  
  //object for presto credentials
  let presto = {
    hostname : req.body.hostname,
    port : req.body.port,
    catalog : req.body.catalog,
    schema : req.body.schema,
    user : req.body.user
  }

  //we need to insert our instance into the database
  let insert = "insert into `prestocreds` values (" +
    0 + ", '" +
    presto.hostname + "', " + 
    presto.port + ", '" +
    presto.catalog + "', '" +
    presto.schema + "', '" +
    presto.user + "');"

  //connect to mysql database
  connection.connect(function(err) {
    if(err) {
      console.error('error connecting: ' + err.stack)
      return
    }

    console.log('connected as id' + connection.threadId)
  })

  //insert values
  connection.query(insert, function (err, result) {
    if(err) throw err
    console.log('record inserted successfully into database')
  })

  //end connection
  connection.end()
  res.redirect('/')
})

module.exports = router