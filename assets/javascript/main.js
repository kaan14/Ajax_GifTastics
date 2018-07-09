
var gifArray = ["comics", "soccer", "business", "succes"];

var queryURL; 
for (var i = 0; i < gifArray.length; i++){
    $("#buttonBar").prepend("<button class='btn btn-primary'>" + gifArray[i]+ "</button>") 
}

$("#btnAddGif").on("click", function(){
    var newGif = $("#newGif").val(); 
    gifArray.unshift(newGif); 
    gifArray.join(); 
   
    console.log(gifArray); 
}); 