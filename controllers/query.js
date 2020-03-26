//page for building queries with a project
var express = require('express');
var router = express.Router();

/* GET query page. */
router.get('/', function(req, res, next) {
  res.render('query')
})

router.post('/query', function(req, res, next) {
  console.log('made it')
})

module.exports = router