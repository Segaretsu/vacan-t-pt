import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function reducers() {
    return {
        users: []
    };
}

export default () => {
    return {
        ...createStore(reducers, applyMiddleware(thunk))
    };
}