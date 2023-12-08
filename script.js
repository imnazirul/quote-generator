const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  getQuote();
});
getQuote();

async function getQuote() {
  try {
    btn.disabled = true;
    quote.innerText = "Getting New Quotes...";
    author.innerText = "Updating...";
    btn.innerText = "Loading...";
    const response = await fetch(
      "https://api.quotable.io/quotes/random?tags=technology,famous-quotes"
    );

    const responseText = await response.json();
    quote.innerText = responseText[0].content;
    author.innerText = responseText[0].author;

    btn.disabled = false;
    btn.innerText = "Get a Quote";
  } catch (error) {
    quote.innerText =
      "There is an error while getting the quote. check your internet connection and try again later";
    author.innerText = "404! Error";
    btn.disabled = false;
    btn.innerText = "Get a Quote";
  }
}
