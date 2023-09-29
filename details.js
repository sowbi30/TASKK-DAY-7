var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

request.onload = function () {
    if (request.status === 200) {
        var result = JSON.parse(request.responseText);

        // Use the forEach function to print details for each country
        result.forEach(function (country) {
            console.log("Name: " + country.name);
            console.log("Capital: " + country.capital);
            console.log("Flag: " + country.flags.svg);
            console.log("----------------------");
        });
    } else {
        console.error("Error:", request.status, request.statusText);
    }
};
