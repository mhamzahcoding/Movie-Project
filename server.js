var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
//I made some changes to this so it would work, then moved the stylesheet into the public folder as well as our .js files
app.use('/public',express.static(__dirname + "/public"));

// Routes
// =============================================================
require("./routes/htmlRoutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });