import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface QuoteProp {
    author: string;
    quote: string;
}

// Styles
const Quote = styled.div`
    text-align: center;
    margin: 0 5em 1em 5em;
    font-style: italic;
    font-size: 1.1em;

    span {
        font-size: 1.5em;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Quotes = () => {
    const [quote, setQuote] = useState<QuoteProp>({
        author: "",
        quote: "Hold infinity in the palm of your hand. And eternity in an hour.",
    });

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        const data = await fetch(
            "http://quotes.rest/qod.json?category=inspire"
        );
        const quotes = await data.json();
        setQuote(quotes.contents.quotes[0]);
    };

    return (
        <div>
            <Quote>
                <span>"</span>
                {quote.quote}
                <span>"</span>
            </Quote>
        </div>
    );
};

export default Quotes;
