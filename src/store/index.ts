import { useState } from "react";
import { createContainer } from "unstated-next";

export interface Quote {
    symbol: string,
    open: number,
    close: number,
    lastPrice: number,
    change: number,
    changePercent: number
}

export const useStore = () => {
    const tempDefault = [
        {
            symbol: "SPY",
            open: 200,
            close: 180,
            lastPrice: 180,
            change: 20,
            changePercent: 10
        },
        {
            symbol: "TSLA",
            open: 200,
            close: 180,
            lastPrice: 180,
            change: 20,
            changePercent: 10
        },
        {
            symbol: "VIX",
            open: 200,
            close: 180,
            lastPrice: 180,
            change: 20,
            changePercent: 10
        }
    ];

    const [quotes, setQuotes] = useState<Quote[]>(tempDefault);

    return { quotes, setQuotes };
};

export const QuotesContainer = createContainer(useStore);