import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories.js';
import products from './products.js';
import cart from './cart.js';
import thunk from './middleware/thunk.js';

// let reducers = combineReducers({categories , products, cart});
let reducers = combineReducers({
    categoryData: categories, 
    productData: products,
    cartData: cart
});


const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store() ;