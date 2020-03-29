//page for building queries with a project
var express = require('express');
var router = express.Router();

//require model for Presto Cluster Credentials
//let presto = require('../models/presto')
let prestomodel = require('../public/javascripts/db/dbpresto')

/* GET query page. */
router.get('/', function(req, res, next) {
  res.render('connect')
})

//handle new credentials being input
router.post('/create', function(req, res, next) {
  
  let presto = {
    hostname : req.body.hostname,
    port : req.body.port,
    catalog : req.body.catalog,
    schema : req.body.schema,
    user : req.body.user
  }
  
  let test = prestomodel.testDB()
  //let newpresto = prestomodel.createPresto(presto)

  //console.log(presto)
  console.log(presto)
  //console.log(test)
  res.redirect('/')
})

module.exports = router