

const secretKey = config.SECRET_KEY;
//load html before running jQuery code
$(document).ready(function() {
    const url = 'https://sandbox-api.brewerydb.com/v2/';
    const url2 = `https://sandbox-api.brewerydb.com/v2/search?q=Coors_Light&type=beer&key=${secretKey}`;
    
//add event listener onto submit button to hit the API and return results
$('#beerSubmit').on('click', function() {
    alert('click button is working');
    $.ajax({
        url: url2,
        method: 'GET',
        contentType: 'application/json',
        dataType: 'json',
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
    });
    })
});
