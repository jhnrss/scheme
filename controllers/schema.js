//route for handling project creation and 
//project management
const express = require('express')
let router = express.Router()

/* GET project page. */
router.get('/', function(req, res, next) {
  res.render('schema')
})

router.get('/schema', function(req, res, next) {
  console.log('made it')
})

router.post('/query', function(req, res, next) {
  console.log('posted up')
})
/*router.post('/use', function(req, res, next) {
  res.redirect('/query')
}) */

module.exports = router