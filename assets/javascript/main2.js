
//function returns "search" variable in the URL
function getURL(search) {
   // return "http://api.giphy.com/v1/gifs/search?q=" + search + "&apikey=z97a11B7OMWkWo2ajStc013lzJbri8w0";
    return "http://api.giphy.com/v1/gifs/search?q=" +search+ "&api_key=z97a11B7OMWkWo2ajStc013lzJbri8w0&limit=15"; 
}


//create button with on click funtion 
function createBtn(text) {
    var newBtn = $("<button/>",  {
        click: function () {
            $("#gifDisplay").empty();  
            createAJAX(text);
        },
        text: text,
        

    });

    $("#buttonBar").append(newBtn);
    newBtn.addClass("btn btn-primary"); 


}


function createAJAX(search) {

    $.ajax({
        url: getURL(search),
        method:"GET"
        
    }).then(function (response) {
        handleResponse(response);
         
    })
    // .fail( function(xhr, textStatus, errorThrown) {
    //     alert(xhr.responseText);
    //     alert(textStatus);
//}); 

}
$("#btnAddGif").on("click", function () {
    var newGifText = $("#newGif").val().trim();
    createBtn(newGifText);
    

});

function handleResponse(response) {

    var rating; 
    
    var results = response.data; 
    console.log(results); 

    for (var i = 0; i < results.length; i++ ){
        //var source = results[i].images.fixed_height.url; 
        var giphyImg= $("<img animatedSrc = '" + results[i].images.fixed_height.url + "' stillSrc = '" + results[i].images.fixed_height_still.url + "'src='" + results[i].images.fixed_height_still.url + "'>");
        var giphyDiv = $("<div>"); 
        //var giphyImg = $("<img>"); 
        //giphyImg.attr("src", source ); 
        giphyDiv.append(giphyImg);
        $("#gifDisplay").append(giphyDiv);
        var ratingP = $("<p>").text("Rating: " + results[i].rating ); 
        // console.log(ratingP);
        $(".container .row #gifDisplay").append(giphyDiv); 
        //  
        // giphyImg.attr("src", results[i].images.fix.height.url); 

        giphyDiv.prepend(ratingP); 

    }

}


$(document.body).on("click", "img", function() { 
    var isAnimated = $(this).attr("isAnimated");
    if(isAnimated==null || isAnimated=='' ){
      isAnimated =  "false";
    }

    if(isAnimated=="true"){
      $(this).attr("src",  $(this).attr("stillSrc") );
      $(this).attr("isAnimated", "false");

    } else {
      $(this).attr("src",  $(this).attr("animatedSrc") );
      $(this).attr("isAnimated", "true");
    }
});


//createBtn("default"); 
createBtn("cat"); 
createBtn("dog"); 
createBtn("rabbit"); 
createBtn("snake"); 
createBtn("horse"); 