

const secretKey = config.SECRET_KEY;
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
        // console.log(response.data);
        console.log(response.data);
        const beerName =  response.data[0].name;   
        const beerDescription = response.data[0].description;  
        const beerImg = response.data[0].labels.medium;
        const beerContent = response.data[0].abv;
        
        //build out card
        const row = $('<div>');
        row.addClass('row').text('test');
        row.append('#beerInfo');

        const card = $('<div>').addClass('card');;
        card.append(row);

        const cardImg = $('<div>').addClass('card-image');
        cardImg.append(card);

        const imgSrc = $('<img>').attr('src', beerImg);
        imgSrc.append(cardImg);

        const span = $('<span>').addClass('card-title').text(beerName);
        span.append(cardImg);

        const cardContent = $('<div>').addClass('card-content');
        cardContent.append(card)

        const p1 = $('<p>').text(beerDescription);
        cardContent.append(p1);

        const p2 = $('<p>').text(beerContent);
        p1.append(p2);
        



        
        


                  // Creating and storing an image tag
                //   var catImage = $("<img>");
                  
                //             // Setting the catImage src attribute to imageUrl
                //             catImage.attr("src", imageUrl);
                //             catImage.attr("alt", "cat image");
                  
                //             // Prepending the catImage to the images div
                //             $("#images").prepend(catImage);
    });
    })
});
