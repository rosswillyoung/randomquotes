let url = "https://talaikis.com/api/quotes/random/";
let quote = "";
function getQuote() {
    $.getJSON(url, function(a) {
        $("#quote").html('"' + a.quote + '"');
        $("#author").html("-" + a.author);
        $("#tweet").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + a.quote + '"' + '-' + a.author));
    })
};
getQuote();



