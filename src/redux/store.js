import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        products:prductSlice.reducer,
    },
}); 