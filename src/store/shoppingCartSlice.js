import {createSlice} from "@reduxjs/toolkit";


const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cartItems = [action.payload, ...state.cartItems]
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
    }
  }

})

export const { addToCart, removeFromCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;