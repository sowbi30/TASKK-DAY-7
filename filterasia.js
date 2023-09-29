
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

request.onload = function () {
    if (request.status === 200) {
        var result = JSON.parse(request.responseText);

        // Use the filter function to get Asian countries
        var asianCountries = result.filter(function (country) {
            return country.region === "Asia";
        });

        // Log the list of Asian countries
        console.log("Asian Countries:", asianCountries);
    } else {
        console.error("Error:", request.status, request.statusText);
    }
};
