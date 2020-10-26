import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categoruActivator from './categories.js';
import list from './products.js';

let reducers = combineReducers({categoruActivator , list});

const store = () => {
    return createStore(reducers, composeWithDevTools());

};

export default store() ;