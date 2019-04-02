// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
var choice= $('#search-term').val();

$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?q="+choice+"&rating=pg&api_key=dc6zaTOxFJmzC",
    method: "GET",
    success:function(response) {
        var randIndex=Math.floor(Math.random()*response.data.length);
        $('.gallery').html (
             '<div>' +
             '<img src=' + response.data[randIndex].images.fixed_width.url + '/>'
             +'</div>');
        },


});

});

