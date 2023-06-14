import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './slices/Product';
import UserReducer from './slices/User';
import CartReducer from "./slices/Cart";
export const store = configureStore({
    reducer: {
        ProductReducer: ProductReducer,
        UserReducer: UserReducer,
        CartReducer,
    },
});
