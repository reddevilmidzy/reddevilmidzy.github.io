const quotes = [
    {
        quote: "We will find a way, we always have.",
        author: "Interstellar",
    },
    {
        quote: "Cuz I'm the one and only",
        author: "ITZY",
    },
    {
        quote: "It's Okay, because I'm strong",
        author: "Lia",
    },
    {
        quote: "Keep your chin up, we got your bakc",
        author: "Ryujin",
    },
    {
        quote: "Icy but I'm a fire",
        author: "Jisoo",
    },
    {
        quote: "Bring me Thanos",
        author: "Thor",
    },
    {
        quote: "I love you 3000",
        author: "Marty",
    },
    {
        quote: "Yibumbe",
        author: "Tichi",
    },
    {
        quote: "I can do this all day",
        author: "Cap",
    },
    {
        quote: "I have nothing prove to you",
        author: "Captin Marvel"
    }
]; 


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)]
//console.log(quotes[Math.floor(Math.random()* quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;