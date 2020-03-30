//route for handling project creation and 
//project management
const express = require('express')
const db = require('mongodb')
const router = express.Router()

const prestocli = require('../public/javascripts/functions/prestoclient')

/* GET project page. */
router.get('/', function(req, res, next) {
  res.render('query')
})

router.get('/schemas', function(req, res, next) {
  var prestos = db.presto.find()
  res.json(prestos)
})

router.post('/query', function(req, res, next) {
  let prestoinst = {
    url: 'http://ec2-34-232-44-5.compute-1.amazonaws.com',
    port: '8080',
    catalog: 'tpch',
    schema: 'sf1',
    user: 'ec2-user'
  }

  let query = req.body.query

  prestocli.PrestoClient(prestoinst, query)
    .then((data) => {
      res.json(data)
    })
})

module.exports = router