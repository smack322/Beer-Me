

const secretKey = config.SECRET_KEY;
console.log(secretKey);
//load html before running jQuery code
$(document).ready(function() { 
//add event listener onto submit button to hit the API and return results
$('#beerSubmit').on('click', function() {
    alert('click button is working');
    //prevent the form from submitting by default
    event.preventDefault();

    const beer = $('#beerSearch').val();
    // make sure there is an underscore for more than one word to stay in sync with the API
    const beerNameFormat = beer.split(' ').join('_');
    const url = `https://sandbox-api.brewerydb.com/v2/search?q=${beerNameFormat}&type=beer&key=${secretKey}`;
  

    //https://sandbox-api.brewerydb.com/v2/beer/KJIjyd/ingredients&key=${secretKey}`
    // /beer/WHQisc/ingredients

    $.ajax({
        url: `https://sandbox-api.brewerydb.com/v2/beer&key=${secretKey}`,
        method: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function() {
            console.log('it\'s working');
        },
        error: function() {
            console.log('error detected');
        }
    })
    .then(function(response) {
        console.log(response.data);
    })

    $.ajax({
        url: url,
        method: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function() {
            console.log('it\'s working');
        },
        error: function() {
            console.log('error detected');
        }
    })
    .then(function(response) {
        console.log(response.data);
        var beerName =  response.data[0].name;   
        var beerDescription = response.data[0].description;  
        var beerImg = response.data[0].labels.medium;
        var beerContent = response.data[0].abv;
        var beerStyle = response.data[0].glass.name;
        console.log('beerStyle', beerStyle);
        console.log(beerName, beerDescription, beerImg, beerContent);
        
        //build out card
        let beerInfo = document.getElementById('beerInfo');
        $("#beerInfo").attr('class', 'unhide');
        $('#beerTitle').html(beerName);
        $('#beerStyle').html(beerStyle);
        $("#beerDescription").html(beerDescription);
        $("#beerImg").attr('src', beerImg).html();
        $("#abvContent").html(beerContent + '% abv');

    });
    });
});
