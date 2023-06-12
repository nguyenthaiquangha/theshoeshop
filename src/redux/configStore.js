import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slides/Product";
import CartReducer from "./slides/Cart";

export const store = configureStore({
    reducer: {
        //nơi setup state
       ProductReducer: ProductReducer,
       CartReducer

    }
})