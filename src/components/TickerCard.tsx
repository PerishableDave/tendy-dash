import * as React from "react";
import { Quote } from '../store';

export interface TickerCardProps {
    quote: Quote
};

export class TickerCard extends React.Component<TickerCardProps, {}> {
    render() {
        return (
            <div className="p-4 m-4 bg-gray-800 text-2xl font-bold text-white">
                <div>
                    { this.props.quote.symbol.toUpperCase() }
                </div>
                <div>
                    { this.props.quote.lastPrice }
                </div>
            </div>
        );
    }
};