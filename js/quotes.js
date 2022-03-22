const quotes = [
  {
    quote: "나는 할 수 있다.",
    author: "윤창현",
  },
  {
    quote: "나는 성공 한다.",
    author: "윤창현",
  },
  {
    quote: "나는 자신감 넘친다.",
    author: "윤창현",
  },
  {
    quote: "나는 개발자다.",
    author: "윤창현",
  },
  {
    quote: "나는 행복하다.",
    author: "윤창현",
  },
  {
    quote: "나는 감사하다.",
    author: "윤창현",
  },
  {
    quote: "나는 든든하다.",
    author: "윤창현",
  },
  {
    quote: "나는 사랑받는다.",
    author: "윤창현",
  },
  {
    quote: "나는 나다.",
    author: "윤창현",
  },
  {
    quote: "나는 윤창현이다.",
    author: "윤창현",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
