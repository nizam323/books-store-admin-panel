import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = Array.isArray(action.payload) ? action.payload : [];
        },
        addProduct: (state, action) => {
            if (!Array.isArray(state.products)) {
                state.products = [];
            }
            state.products.push(action.payload);
        },
        updateProduct: (state, action) => {
            const { proId, proName, proPrice, proURL } = action.payload;
            const index = state.products.findIndex((product) => product.id == proId);

            if (index !== -1) {
                const product = state.products[index];
                if (proName != "") product.productname = proName;
                if (proPrice != "") product.productprice = proPrice;
                if (proURL != "") product.productpicurl = proURL;
            }
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id != action.payload);
        },
    },
});

export const { setProducts, addProduct, updateProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;