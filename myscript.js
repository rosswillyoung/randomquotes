let url = "https://talaikis.com/api/quotes/random/";
let quote = "";
function getQuote() {
    $.getJSON(url, function(a) {
        $("#quoteContainer").html(a.quote);
    })
};
getQuote();


