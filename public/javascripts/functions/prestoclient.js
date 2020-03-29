const fetch = require('node-fetch')

/*
 *  required for interacting with the presto cluster
 *  -> need route for api
 *  -> cont required for extended queries following 'nextUri'
*/
const endpoint = '/v1/statement'
const cont = {
    method: 'GET',
}

/*
 *  function for Presto Client REST API, will handle all requests and responses
 *  to a specified Presto Cluster with a specified query string
*/
const PrestoClient = (prestoinst, query) => {
    //return data
    let retdata = {
        columns: [],
        data: []
    }

    //define the url, the host with the port, and http method/headers/query body
    let url = prestoinst.url
    let host = url + ':' + prestoinst.port
    let request = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Presto-User': prestoinst.user,
            'X-Presto-Catalog': prestoinst.catalog,
            'X-Presto-Schema': prestoinst.schema
        },
        body: query
    }

    try {
        console.log("endpoint: " + host + endpoint + ", request: " + JSON.stringify(request))
        
        //make initial call to server, with POST method and the query to be evaluated
        let response = Response(host + endpoint, request, retdata)
        console.log(retdata)
        return retdata
    } catch (err) {
        return err
    }
}

/*
 *  handle the response from the server
 *  each request needs to be turned from a string into a json object
 *  if the return object contains the field 'nextUri', then go to that route + the host
 *  return data in fields columns and data
*/
const Response = (url, request, data) => {
    let response = Request(url, request)
        .then((jsonres) => {
            console.log(jsonres)
            if(jsonres.hasOwnProperty('error')) {
                console.log(jsonres.error)
                return jsonres.error
            }

            data = UpdateData(jsonres, data)

            if(jsonres.hasOwnProperty('nextUri')) {
                console.log('...going to next URI at: ' + jsonres.nextUri)
                return Response(jsonres.nextUri, cont, data)
            }
            else {
                return data
            }
        })
}

/*
 *  make a request to the Cluster
 *  url -> current route for query
 *  request -> current request (either POST or GET)
*/
const Request = async (url, request) => {
    try {
        const response = await fetch(url, request)
        return await response.json()
    } catch(err) {           
        return err
    }
}

/*
 *  add to the data and columns fields for the
 *  return data that will be handled on the front end
*/
const UpdateData = (response, data) => {
    if(response.hasOwnProperty('columns'))
        data.columns.push(response.columns)
    if(response.hasOwnProperty('data'))
        data.data.push(response.data)
    return data
}

module.exports.PrestoClient = PrestoClient