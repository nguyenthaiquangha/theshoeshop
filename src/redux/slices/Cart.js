import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    totalQuantity: 0,
}

const CartSlide = createSlice({
    name: 'CartSlide',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].cartQuantity += 1
            } else {
                state.cart.push({...action.payload,cartQuantity: 1});
            }
        },
        getCartToTalQuantity: (state) => {
            let { totalQuantity } = state.cart.reduce(
                (CartToTal) => {
                    const quantity = 1;
                    CartToTal.totalQuantity += quantity;
                    return CartToTal
                },
                {
                    totalQuantity: 0,

                }
            );
            state.totalQuantity = totalQuantity;
        },
        deleteCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        tangItemCart: (state,action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return {...item, cartQuantity: item.cartQuantity +1}
                }
                return item
            })
        },
        giamItemCart: (state,action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    if (item.cartQuantity < 1) {
                        item.cartQuantity = 1
                        return {...item, cartQuantity: item.cartQuantity - 1}
                    }
                    return {...item, cartQuantity: item.cartQuantity - 1}
                }
                return item
            })
        },
        clearCart: (state,action) => {
            state.cart = action.payload;
        }
    }
});

export const { addToCart, getCartToTalQuantity,deleteCart,tangItemCart,giamItemCart,clearCart } = CartSlide.actions

export default CartSlide.reducer