

var gifArray = ["comics", "soccer", "business", "succes"];

for (var i = 0; i < gifArray.length; i++) {
    $(".buttonBar").prepend("<button class='btn btn-primary'>" + gifArray[i] + "</button>")
}




$("#btnAddGif").on("click", function () {
    var newGif = $("#newGif").val().trim();
    gifArray.unshift(newGif);
    gifArray.join();
    console.log(gifArray);

    for (var i = 0; i < gifArray.length; i++) {
        if (gifArray[i] == newGif) {
          var newbtn =  $("#buttonBar").prepend("<button class='btn btn-primary'>" + gifArray[i] + "</button>"); 
           
        }
    }
});
function getURL(search) {
    return "http://api.giphy.com/v1/gifs/search?q=" + search + "&apikey=z97a11B7OMWkWo2ajStc013lzJbri8w0";
}





$.ajax({
    url: getURL(),
    method: "GET"
}).then(function (response) {
    $(".buttonBar").on("click", ".btn", function () {
        event.preventDefault();
        var btnText = $(this).text();
        search = btnText;
        console.log(btnText);
    });
    console.log(response);
});
