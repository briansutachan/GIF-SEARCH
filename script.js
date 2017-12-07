// READ the giphy API docs: https://developers.giphy.com/
const giphy_endpoint = 'http://api.giphy.com/v1/gifs'

// obtain the giphy api ket at developer.giphy.com
var giphy_api_key = "MFCFZaQB4X9HSysyoaMMD00dFJv76B9V"

// select element for the DOM
var searchForm = document.querySelector('#search-form')
var searchInput = document.querySelector('#search-form input')
var results = document.querySelector(`.results`)

// We will use axios to help manage our promises and we will use it in a function called getGifs

function getGifs(term, path, callback){
    // axios(`${giphy_endpoint}/${path}?api_key=${giphy_api_key}&q=${term}`).then(function(res){
    //     // console.log(res.data.data[0].url)
    //     callback(res.data.data)
    // })
    $.ajax({
        type: "GET",
        url: `${giphy_endpoint}/${path}?api_key=${giphy_api_key}&q=${term}`,
        dataType: "json",
        success: function(data) {
            console.log(data.data)
            callback(data.data)
        },
        error: function(error){
            console.log("There was an error")
        }
    })
 }
function displayManyGifs(data){
    data.forEach(function(gif){
        console.log(gif.url)
        results.innerHTML += `<img class="image" src="${gif.images.preview_gif.url}">`
    })
}

// event handler for submit
searchForm.addEventListener(`submit`, function(event){
    event.preventDefault()
    if(searchInput === "") return

    results.innerHTML = ""
    
    getGifs(searchInput.value, "search", displayManyGifs)
})


