import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex((product) => product.id == action.payload.proId);
            console.log(action.payload);
            console.log(index);

            if (index != -1) {
                state.products[index] == action.payload;
            }
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
    },
});

export const { setProducts, addProduct, updateProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;