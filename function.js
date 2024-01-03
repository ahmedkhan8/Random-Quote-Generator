// Define an array of quotes
const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The way to get started is to quit talking and begin doing.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Believe you can, and you're halfway there." ,
    "The only way to do great work is to love what you do." ,
    "Success is not final, failure is not fatal: It is the courage to continue that counts." ,
    "Be yourself; everyone else is already taken." ,
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The best way to predict the future is to create it." ,
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Happiness is not something readymade. It comes from your own actions.", 
    "It always seems impossible until it's done.",
    "Don't watch the clock; do what it does. Keep going.",
    "The purpose of our lives is to be happy." ,
    "You only live once, but if you do it right, once is enough." ,
    "Success is stumbling from failure to failure with no loss of enthusiasm." ,
    "Life is 10% what happens to us and 90% how we react to it." ,
    "The best revenge is massive success." ,
    "To live is the rarest thing in the world. Most people exist, that is all.", 
    "Strive not to be a success, but rather to be of value." ,
    "It does not matter how slowly you go as long as you do not stop." ,
    "The only way to do great work is to love what you do." ,
    "The best preparation for tomorrow is doing your best today." ,
    "I find that the harder I work, the more luck I seem to have." 
    // Add more quotes as needed
];

// Function to generate a random quote
function generateQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Display the random quote on the webpage
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = quotes[randomIndex];
}

// Event listener for the "Generate Quote" button
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generateQuote);

// Initial quote generation on page load
generateQuote();