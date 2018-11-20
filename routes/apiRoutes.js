var db = require ("../models");
var axios = require ("axios");

module.exports = function(app) {
    app.get("/api/movies", function(req, res){
      var title = req.query.search;
      // "/api/movies?search=movietitle"
      axios.get("https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy").then(function(json) {
        res.status(200).json(json);
      });
    });
  }