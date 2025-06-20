"use strict"
const elements = {
    quote: document.getElementById("quote"), 
    author: document.getElementById("author"),
};

async function getRandomImage() {
    const client_id = "CrsabaiYUQwpJhFkeYLKRjZMWN_Op46hSIxWSXQHNNk";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        console.log(receivedPhotoUrl);  // 👈 This checks if the image URL is valid


        const imgDiv = document.querySelector(".background-img");
        console.log(imgDiv);
        
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error);
    }
}

getRandomImage();

/* const quotes = [
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
setTimeout(loopThroughQuotes, 3000); */