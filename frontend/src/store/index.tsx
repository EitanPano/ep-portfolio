import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { authReducer } from './auth/reducer';
import { userReducer } from './user/reducer';
// import { productReducer } from './product/reducer';
// import { cartReducer } from './cart/reducer';

const reducer = combineReducers({
    authModule: authReducer,
    userModule: userReducer
    // productModule: productReducer,
    // cartModule: cartReducer
})

export const store = configureStore({reducer});
