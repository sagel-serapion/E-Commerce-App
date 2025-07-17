
//A reducer is a pure function in Redux that takes the current state and an action, and returns a new state.

//Syntax:

//js
//Copy
//Edit
//(state, action) => newState

import {createStore,combineReducers ,applyMiddleware,compose} from 'redux';
import {devToolsEnhancer } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';

import { getProductsReducer, getProductDetailsReducer} from './reducers/productReducer'; // Import the reducer

import { cartReducer } from './reducers/cartReducer'; // Import the cart reducer

const reducer=combineReducers({
    getProducts: getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart :cartReducer
});


const middleware = [thunk]; // for handling asynchronous actions

const store = createStore( // reducer and middleware
    reducer,
     compose(applyMiddleware(...middleware),
     devToolsEnhancer()
    ) // for debugging in the browser
);

export default store;