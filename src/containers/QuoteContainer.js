import React, { useState, useEffect } from "react";
import "../styles/QuoteContainer.css";

function QuoteContainer() {
  const [content, setContent] = useState("Loading...");
  const [author, setAuthor] = useState("");

  async function fetchQuote() {
    try {
      const response = await fetch(
        `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=${Date.now()}`
      );

      const [quote] = await response.json();

      setContent(quote?.content?.rendered);
      setAuthor(quote?.title?.rendered);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote">
      <div className="quotecontent">
        <div className="text" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="author">— {author}</div>
      <div className="button">
        <h5 className="newquote" onClick={fetchQuote}>
          New Quote?
        </h5>
      </div>
    </div>
  );
}

export default QuoteContainer;
