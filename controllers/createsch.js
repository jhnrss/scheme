//page for building queries with a project
var express = require('express');
var router = express.Router();

//require model for Presto Cluster Credentials
let presto = require('../models/prestocreds')

/* GET query page. */
router.get('/', function(req, res, next) {
  res.render('createsch')
})

//handle new credentials being input
router.post('/create', function(req, res, next) {
  let newPresto = new presto(req.body.hostname, 
    req.body.port, 
    req.body.catalog,
    req.body.schema,
    req.body.user)
  console.log('New Presto', newPresto)
  res.redirect('/')
})

module.exports = router