//model for prestocredentials
//includes cluster url, cluster port, the data catalog, the data schema, and the cluster user

class PrestoCreds {
    constructor(url, port, catalog, schema, user) {
        this.url = url
        this.port = port
        this.catalog = catalog
        this.schema = schema
        this.user = user
    }
    display() {
        console.log(this.catalog + ", " + this.schema)
    }
}

module.exports = PrestoCreds