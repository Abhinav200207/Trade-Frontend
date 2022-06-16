import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, userReducer } from "./reducers/readereducers";

const store = configureStore({
    reducer: {
        productReducer: productsReducer,
        user:userReducer
    },
});

export default store;