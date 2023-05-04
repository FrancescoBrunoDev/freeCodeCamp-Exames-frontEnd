"use client";

import React, { useState, useEffect } from "react";
import { BsTwitter } from "react-icons/bs";
import { Quote, QUOTES } from "./components/quotes";

const QuotePicker: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  const handleClick = () => {
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(randomQuote);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <main className="flex min-h-screen-100dvh flex-col items-center justify-center relative">
      <div
        id="quote-box"
        className="flex min-h-screen flex-col items-center justify-center relative"
      >
        <div className="lg:w-2/5 w-4/5 h-min shadow-2xl rounded-lg">
          <div className="p-10">
            <div id="text" className="">
              <h1 className="mb-10 md:text-4xl sm:text-5xl font-black text-center">
                “{quote?.text}„
              </h1>
              <h2 id="author" className="text-right">
                by {quote?.author}
              </h2>
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          id="new-quote"
          className="rounded-full shadow-xl py-1 px-6 font-light text-xl absolute bottom-16 transition-transform hover:scale-110"
        >
          get inspired
        </button>
        <a
          id="tweet-quote"
          className="bottom-3 absolute"
          href={`https://twitter.com/intent/tweet?text=${quote?.text} - ${quote?.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter size="30px" />
        </a>
      </div>
    </main>
  );
};

export default QuotePicker;
