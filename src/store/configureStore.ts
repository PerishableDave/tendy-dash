import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

export default function configureStore(preloadedState? : any) {
    return createStore(
        reducer,
        preloadedState,
        applyMiddleware()
    )
}