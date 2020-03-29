//model for prestocredentials
//includes cluster url, cluster port, the data catalog, the data schema, and the cluster user

class Presto {
    constructor(presto) {
        this.url = presto.url
        this.port = presto.port
        this.catalog = presto.catalog
        this.schema = presto.schema
        this.user = presto.user
    }
    display() {
        console.log("Host: " + this.url + ":" + this.port + 
            ", Catalog: " + this.catalog + 
            ", Schema: " + this.schema)
    }
}

module.exports.Presto = Presto