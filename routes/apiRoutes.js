var axios = require ("axios");
var connection = require("../config/connection.js");


module.exports = function(app) {

    app.get("/api/movies/:id", function(req, res){
      var id = req.params.id;
      // "/api/movies?search=movietitle"
      axios.get("https://www.omdbapi.com/?i=" + id + "&y=&plot=short&apikey=trilogy").then(function(movie) {
        console.log(movie.data)
        res.json(movie.data);
      });
    });
  };


// Routes
// =============================================================
module.exports = function(app) {
  // Get all review
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM reviews";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a review
  app.post("/api/new/", function(req, res) {
    console.log("Review Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO reviews (author, body, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Review Successfully Saved!");
      res.end();
    });
  });


};
