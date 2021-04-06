const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const quoteButton = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter");

function newQuote(){
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  if(!quote.author){
    quoteAuthor.textContent = "Unknown";
  }else{
    quoteAuthor.textContent = quote.author;
  }

  quoteText.textContent = quote.text;
}

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuote();
quoteButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);
