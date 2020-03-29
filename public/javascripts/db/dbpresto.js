const mongoose = require('mongoose')
const Schema = mongoose.Schema

//presto schema definition
const PrestoSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    hostname: String,
    port: Number,
    catalog: String,
    database: String,
    user: String
})

//Presto model utilizing presto schema
const Presto = mongoose.model('Presto', PrestoSchema)

//test connection
async function testDB() {
    const options = { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        user: schemeuser,
        pass: scheme2020 
    }

    await mongoose.connect('mongodb://localhost:27017/schememodels', 
        options, function(err) {
            if (err) 
                console.log('Error Connecting to mongodb')
            else
                console.log('Connection successfully made')
        }
    )
}

//create presto instance on db
const createPresto = (obj) => {
    let newPresto = new Presto({
        _id: new mongoose.Types.ObjectId(),
        hostname: obj.hostname,
        port: obj.port,
        catalog: obj.catalog,
        database: obj.schema,
        user: obj.user
    })

    newPresto.save(function(err) {
        if (err) throw err

        console.log('Presto sucessfully saved.')
    })
}

//export functions
module.exports.createPresto = createPresto
module.exports.testDB = testDB