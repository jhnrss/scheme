# scheme

A MVC inspired Node.JS Express query generation application that utilizes Docker for deployment.

Scheme requires a Presto Cluster for querying in its current build, as it utilizes a custom javascript-based presto-client. This allows Scheme to be datasource agnostic and only requires that the Presto Connector be set up for any given data source that will be queried.

Instructions for use:

- From the app directory, run in powershell/terminal: "docker-compose up -d --build schemeapp schememodels"\n
  This will create the the corresponding containers for bother the application and the database in the backend.

- To shut down the containers, run: "docker-compose down -v"\n
  The "-v" parameter will delete the volumes from the associated containers and to keep the volumes, drop the "-v" directive.