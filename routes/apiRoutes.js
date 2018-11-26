
var axios = require ("axios");

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
