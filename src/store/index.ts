import { useState } from "react";
import { createContainer } from "unstated-next";

export interface Quote {
  tickerSymbol: string,
  open: number,
  close: number,
  lastPrice: number,
  change: number,
  changePercent: number
}

export interface Watchlist {
  tickerSymbols: string[]
}

export const useStore = () => {
  const tempDefault = [
    {
      tickerSymbol: "SPY",
      open: 200,
      close: 180,
      lastPrice: 180,
      change: 20,
      changePercent: 10
    },
    {
      tickerSymbol: "TSLA",
      open: 200,
      close: 180,
      lastPrice: 180,
      change: 20,
      changePercent: 10
    },
    {
      tickerSymbol: "VIX",
      open: 200,
      close: 180,
      lastPrice: 180,
      change: 20,
      changePercent: 10
    }
  ];

  const [quotes, setQuotes] = useState<Map<string, Quote>>(new Map<string, Quote>());
  const [watchlist, setWatchlist] = useState<Watchlist>();

  const setQuote = (quote) => {
    setQuotes()
  };
  return { quotes, setQuotes };
};

export const QuotesContainer = createContainer(useStore);