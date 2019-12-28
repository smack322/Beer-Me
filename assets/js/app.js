//
// import config from './config';

// const secretkey = config.SECRET_KEY;
// console.log(secretkey);


//load html before running jQuery code
$(document).ready(function() {
    const url = 'https://sandbox-api.brewerydb.com/v2/';
    var url2 = 'https://sandbox-api.brewerydb.com/v2/search?q=Coors_Light&type=beer&key=';

//add event listener onto submit button to hit the API and return results
$('#beerSubmit').on('click', function() {
    alert('click button is working');
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // // const url = "https://example.com"; // site that doesn’t send Access-Control-*
    // fetch(proxyurl + url2) // https://cors-anywhere.herokuapp.com/https://example.com
    // .then(response => response.text())
    // .then(contents => console.log(contents))
    // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


    $.ajax({
        url: url2,
        method: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        headers: {"X-My-Custom-Header": "https://localhost:3000/"},
        success: function() {
            alert('it\'s working');
        },
        error: function() {
            alert('error detected');
        }
    })
    .then(function(response) {
        console.log(response.data);
        console.log(response);
    })
});

});