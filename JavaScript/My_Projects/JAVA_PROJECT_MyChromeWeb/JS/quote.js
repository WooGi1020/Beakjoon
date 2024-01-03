const quoteList = [
{
    quote:"You will face many defeats in life, but never let yourself be defeated.",
    author:"Maya Angelou"
},
{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela"
},
{
    quote:"Life is either a great adventure or nothing.",
    author:"Helen Keller"
},
{
    quote:"Despite the forecast, live like it’s spring.",
    author:"Lilly Pulitzer"
},
{
    quote:"Only dead fishes go with the flow.",
    author:""
},
{
    quote:"The time is always right to do what is right.",
    author:"Martin Luther King Jr."
},
{
    quote:"Change the game, don't let the game change you.",
    author:"Macklemore"
},
{
    quote:"Luck is matter of preparation meeting opportunity.",
    author:"Seneca"
},
{
    quote:"Happiness is a state of activity.",
    author:"Aristotle"
},
{
    quote:"We acquire the strength we have overcome.",
    author:"Ralph Waldo Emerson"
},
{
    quote:"Where there's no struggle, there's no strength",
    author:"Oprah Winfrey"
},
{
    quote:"Believe in yourself.",
    author:""
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;