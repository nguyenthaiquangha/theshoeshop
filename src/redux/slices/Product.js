import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    listProduct: [],
};

const ProductSlice = createSlice(
    {
        name: 'ProductSlice',
        initialState,
        reducers: {
            setListProduct: (state, action) => {
                state.listProduct = action.payload;
            },
        },
    }
);

export const { setListProduct } = ProductSlice.actions;
export default ProductSlice.reducer;