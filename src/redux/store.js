import { configureStore } from "@reduxjs/toolkit";
import prductSlice from "./slices/productsDataSlice";

export const store = configureStore({
    reducer: {
        products:prductSlice,
    },
}); 