export const UPDATE_QUOTES = 'UPDATE_QUOTES';
export const UPDATE_QUOTES_SUCCESS = 'UPDATE_QUOTES_SUCCESS';
export const UPDATE_QUOTES_FAILURE = 'UPDATE_QUOTES_FAILURE';

export interface UpdateQuotesAction {
    type: typeof UPDATE_QUOTES
}

export interface UpdateQuotesSuccessAction {
    type: typeof UPDATE_QUOTES_SUCCESS,
    quotes: Quote[]
}

export interface UpdateQuotesFailureAction {
    type: typeof UPDATE_QUOTES_FAILURE,
    error: string
}

export type DashActionTypes =
    UpdateQuotesAction |
    UpdateQuotesFailureAction |
    UpdateQuotesSuccessAction;

export interface Quote {
    symbol: string,
    open: number,
    close: number,
    lastPrice: number,
    change: number,
    changePercent: number
}

export interface DashState {
    quotes: Quote[]
}