function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "80to4504b1bffce54e6217aa359d05ad";
  let prompt = `User instructions:Generate a short poem about ${instructionsInput.value}`;
  let context =
    "You are a quote expert. you are tasked with generating a  short quote. Make sure to follow user instructions. Add the author of the quote at the end of the quote wrapped in a <strong></strong> and <br />";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
