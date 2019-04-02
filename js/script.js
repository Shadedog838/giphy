// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
   var choice = $("#search-term").val();


    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+ choice,
        method: "GET",
        success: function(response) {
            $('#image').append("<img src=" + response.data[0].images.downsized_large.url + ">");
console.log(response.data[0].images.downsized_large.url);
        },
    });

});



