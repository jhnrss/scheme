//route for handling project creation and 
//project management
const express = require('express')
let router = express.Router()

//const db = require('/javascripts/db/mysqlbuild.js')

/* GET project page. */
router.get('/', function(req, res, next) {
  res.render('project')
})

router.post('/create', function(req, res, next) {
  let formData = req.body
  console.log('form data', formData)
})

router.post('/use', function(req, res, next) {
  res.render('query')
})

module.exports = router