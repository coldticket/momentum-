const quotes = [
  {
    quote: "life is a tragedy when seen in close up but a comedy in long shot",
    author: "Charlie Chaplin",
  },
  {
    quote:
      "Your time is limited. so do not wate time  living someone else's life",
    author: "Steve Jobs",
  },
  {
    quote: "know yourself",
    author: "Socrates",
  },
  {
    quote: "Life is really simpe, but we insist on making it complicated",
    author: "Confucius",
  },
  {
    quote: "Price is what you pay. Value is what you get.",
    author: "Warren Buffett",
  },
  {
    quote: "Be the change you wish to see in the world",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Be patient everything comes to you in the right moment",
    author: "Buddha",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "The best way to predict your future is to create it. ",
    author: "Abraham Lincoln",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteitem = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = quoteitem.quote;
author.innerText = quoteitem.author;
