import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ListProduct: [],
    ListCategory: [],
}

const ProductSlide = createSlice({
    name: 'ProductSlide',
    initialState,
    reducers: {
        setListProduct: (state, action) => {
            state.ListProduct = action.payload
        },
        setListCategory: (state, action) => {
            state.ListCategory = action.payload
        }
    }
});

export const { setListProduct, setListCategory } = ProductSlide.actions

export default ProductSlide.reducer