const quotes = [
    {
        quote: "Patience is better, but its fruit is sweet.",
        author: "Aristotle",
    },
    {
        quote: "Love is the only force capable of transforming an enemy into a friend.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller",
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan",
    },
    {
        quote: "I didn't get there by wishing for it or hoping for it, but by working for it.",
        author: "Estée Lauder",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "Life can only be understood backwards; but it must be lived forwards.",
        author: "Søren Kierkegaard",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author: "Kamal Ravikant",
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;