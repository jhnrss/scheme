//connect to local couchdb instance
let nano = require('nano')('http://localhost:5984')

//create the projects database
nano.db.create('prestocreds')
