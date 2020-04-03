import { DashState, Quote, DashActionTypes } from './types';

const initialState: DashState = {
    quotes: [
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
    ]
}

export default function reducer(state = initialState, action: DashActionTypes): DashState {
    return state;
}