"use strict";
const elements = {
  quote: document.getElementById("quote"),
  author: document.getElementById("author"),
};

async function getRandomImage() {
  const endpoint = "http://localhost:8080/api/v1/getRandomImage";
  try {
    const response = await fetch(endpoint);
    const returnedData = await response.json();
    const receivedPhotoUrl = returnedData.data;

    const imgDiv = document.querySelector(".background-img");
    imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
  } catch (error) {
    console.error(error);
  }
}
getRandomImage(); // ✅ Image is loaded

// ✅ QUOTE LOOP IS NOW ACTIVE
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
  },
];

function loopThroughQuotes() {
  let quoteIndex = 0;
  setInterval(() => {
    elements.quote.textContent = quotes[quoteIndex].quote;
    elements.author.textContent = quotes[quoteIndex].author;
    quoteIndex = (quoteIndex + 1) % quotes.length; // Loop cleanly
  }, 3000);
}

setTimeout(loopThroughQuotes, 3000); // ⏳ Start loop after image loads
