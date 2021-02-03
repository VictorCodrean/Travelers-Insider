var apiKey = "062f1094719e081c0ffc6ab1f3e61902"

var requestRestaurantUrl = "https://developers.zomato.com/api/v2.1/restaurant?res_id="
var requestCitiesUrl = "https://developers.zomato.com/api/v2.1/search?q="


var requestHeader = new Headers({
    'user-key': apiKey
})
function searchCity(cityName) {
    // building the complete api call url by adding the cityName parameter to the base url
    // note the second parameter to the fetch() call, which is an object with a "headers"
    // property, which I set equal to our requestHeaderCity object from earlier
    fetch(requestCitiesUrl + cityName, {
        headers: requestHeaderCity
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        // log the returned data.
        // (Look at the "location_suggestions" property of the returned object)
        console.log(data);
    })
}
16726984
function searchRestaurant(rest) {
    fetch(requestRestaurantUrl)
}


function getRestaurantsAround(cityNameInput) {

};

$("#search-button-rest").on("click", function (event) {
    event.preventDefault();
    var cityNameInput = $("#search-input-city").val();
    var restaurantNameSelect = $("#search-input-rest").val();
    console.log(cityNameInput)
    searchCity(cityNameInput);
    // getRestaurantsAround(cityNameInput);

});