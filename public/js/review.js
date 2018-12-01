// When the page loads, grab and display all of our reviews
if (sessionStorage.getItem('movieId')) {
  $.get("/api/reviews/" + sessionStorage.getItem('movieId'), function (data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("review");
        row.append("<p>" + data[i].author + " reviewed.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
        $("#review-area").prepend(row);
  
      }
  
    }
  
  });
}


// When user reviews (clicks addBtn)
$("#review-submit").on("click", function (event) {
  event.preventDefault();

  // Make a newReview object
  var newReview = {
    movieId: $("#movie-id").data("id"),
    author: $("#author").val().trim(),
    body: $("#review-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
  };

  console.log(newReview);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newReview)
    // On success, run the following code
    .then(function () {


      var row = $("<div>");
      row.addClass("review");
      row.append("<p>" + newReview.author + " reviewed: </p>");
      row.append("<p>" + newReview.body + "</p>");
      row.append("<p>At " + moment(newReview.created_at).format("h:mma on dddd") + "</p>");
      $("#review-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#review-box").val("");
});