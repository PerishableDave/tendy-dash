import React from 'react';
import { QuotesContainer, Quote } from '../store';
import { TickerCard } from './TickerCard';

export default () => {
    const quotesContainer = QuotesContainer.useContainer();

    const tickerCards = quotesContainer.quotes.map((quote) => {
        return (<TickerCard key={quote.symbol} quote={quote} />)
    })

    return (
        <div className="grid grid-cols-3 md:grid-cols-3 gap-10">
            {tickerCards}
        </div >
    );
};