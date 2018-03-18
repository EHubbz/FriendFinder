var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

//handles data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//directs server to route files
require("./routing/apiroutes")(app);
require("./routing/htmlroutes")(app);

//starts listening to start the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




