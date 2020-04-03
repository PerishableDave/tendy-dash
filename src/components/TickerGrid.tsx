import React from 'react';
import { connect } from 'react-redux';
import { DashState, Quote } from '../store/types';
import { TickerCard } from './TickerCard';

export interface TickerGridProps {
    quotes: Quote[]
};

export class TickerGrid extends React.Component<TickerGridProps, {}> {
    render() {
        const tickerCards = this.props.quotes.map((quote) => {
            return (<TickerCard key={ quote.symbol } quote={ quote } />)
        })

        return (
            <div className="grid grid-cols-3 md:grid-cols-3 gap-10">
                { tickerCards }
            </div >
        );
    }
};

const mapStateToProps = (state: DashState): TickerGridProps => {
    return state
}

export default connect(mapStateToProps)(TickerGrid);