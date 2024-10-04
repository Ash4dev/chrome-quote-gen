async function fetchQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://zenquotes.io/api/random';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        document.getElementById('quote').innerHTML = `"${data[0].q}"`;
        document.getElementById('author').innerHTML = `- ${data[0].a}`;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        document.getElementById('quote').innerHTML = "Failed to fetch the quote.";
        document.getElementById('author').innerHTML = "";
    }
}

// Load a quote when the page initially loads
window.onload = fetchQuote;

// Add event listener to the button
document.getElementById('get-quote').addEventListener('click', fetchQuote);
