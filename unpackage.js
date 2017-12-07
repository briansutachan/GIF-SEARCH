// READ the giphy API docs: https://developers.giphy.com/
const giphy_endpoint = 'http://api.giphy.com/v1/gifs'

//obtain the giphy api ket at developer.giphy.com
var giphy_api_key = "MFCFZaQB4X9HSysyoaMMD00dFJv76B9V"

function getGifs(term, path, callback){

   $.ajax({
       type: "GET",
       url: `${giphy_endpoint}/${path}?api_key=${giphy_api_key}&q=${term}`,
       dataType: "json",
       success: function(data){
           console.log(data)  
           console.log(data.pagination)
           console.log(data.meta)         
           console.log(data.data[10].username)
           console.log(data.data[20].images.original.height)
       },
       error: function(error){
           console.log("There was an error")
       }
   })
}

getGifs("fruits", "search", function(){})

$.ajax({/*type, url, dataType, success, error*/})