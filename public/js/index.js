"use strict"
const elements = {
    quote: document.getElementById("quote"), 
    author: document.getElementById("author"),
};

const quotes = [
    {
        quote: "Rejoice Always", 
        author: "1 Thessalonians 5:16", 
    },

    {
        quote: "Let all that you do be done in love.", 
        author: "1 Corinthians 16:14", 

    }, 

    {
        quote: "If you can't say something nice, don't say anything at all", 
        author: "Thumper", 
    },

    {
        quote: "Do unto others as you would have them do unto you", 
        author: "Matthew 7:12",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);

}
setTimeout(loopThroughQuotes, 3000);