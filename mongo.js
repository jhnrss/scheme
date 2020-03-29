//import mongodb files
var db = require('mongodb')

//authenticate db
db.auth('admin', 'password')

//initialize mongodb database
db.createUser({
    user : 'schemeuser',
    pwd : 'scheme2020',
    roles : [
        {
            role : 'readWrite',
            db : 'schememodels'
        }
    ]
})