import { useState } from "react";
import quotes from "./assets/quotes.json";
import { ImQuotesLeft, ImQuotesRight, ImTwitter } from "react-icons/im";
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote);
  const [randomColor, setRandomColor] = useState<string>(getRandomColor);

  const chnageQuote = () => {
    setQuote(getRandomQuote);
    setRandomColor(getRandomColor);
  };

  return (
    <div
      className="background"
      style={{ backgroundColor: randomColor, transition }}
    >
      <div id="quote-box">
        <div
          className="quote-content"
          style={{ color: randomColor, transition }}
        >
          <h2 id="text">
            <ImQuotesLeft size="25" style={{ marginRight: "10px" }} />
            {quote.quote}
            <ImQuotesRight size="25" style={{ marginLeft: "10px" }} />
          </h2>

          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href="twitter.com/intent/tweet"
            id="tweet-quote"
            target="_blank"
            style={{ backgroundColor: randomColor, transition }}
          >
            <ImTwitter />
          </a>
          <button
            id="new-quote"
            onClick={chnageQuote}
            style={{ backgroundColor: randomColor, transition }}
          >
            change quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
