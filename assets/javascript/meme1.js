var object = [];
var emotion = [];
var place = [];

$("#button-addon2").on("click", function (event) {
    event.preventDefault();
    console.log("click")
    var objectText = $(".form-control").val().trim();

    //var emotionText = $(".emotion-input").val().trim();

    //var placeText = $(".place-input").val().trim();

    object.push(objectText);
    console.log(objectText);

    //emotion.push(emotionText);
    //console.log(emotionText);

    //place.push(placeText);
    //console.log(placeText);

    // queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=9tPmQXukCEVIORN4YM6PUQloQ0OiWlC3&q=" + objectText + "&limit=4&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div for the gif
                var gifDiv = $("<div>");
                gifDiv.attr("class", "col-sm-3")

                // Storing the result item's rating
                //var rating = results[i].rating;

                //Creating a paragraph tag with the result item's rating
                //var p = $("<p>").text("Rating: " + rating);

                // Creating an image tag
                var personImage = $("<img>");

                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                personImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                //gifDiv.append(p);
                gifDiv.append(personImage);

                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifs-appear-here").prepend(gifDiv);
            }
        }

    });

});