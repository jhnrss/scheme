# scheme

A MVC inspired Node.JS Express query generation application that utilizes Docker for deployment.

Scheme requires a Presto Cluster for querying in its current build, as it utilizes a custom javascript-based presto-client.

Instructions for use:

- From the app directory, run in powershell/terminal: "docker-compose up -d --build schemeapp schememodels"
  This will create the the corresponding containers for bother the application and the database in the backend.

- To shut down the containers, run: "docker-compose down -v"
  The "-v" parameter will delete the volumes from the associated containers and to keep the volumes, drop the "-v" directive.