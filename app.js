$(document).ready(function () {


var gifbuttons = ["Steph Curry" , "Kevin Durrant", "Lebron James", "James Harden", "Kyrie Irving", "Kemba Walker",]


console.log (gifbuttons)

for (var i = 0; i < gifbuttons.length; i++) {
    var buttons = $('<button>'+ gifbuttons[i] + '</button>') 
    $('#gifbutton').append(buttons);
    buttons.attr("data-buttonvalue", gifbuttons[i]);
}

$("button").on("click", function() {
    var person = $(this).attr("data-buttonvalue");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=lNEJ78XOZpezg21dhYnzrVW02tGAs3V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs").prepend(gifDiv);
        }
      });
  });





})