import { configureStore } from "@reduxjs/toolkit";
import products from './productsSlice'
import shoppingCart from './shoppingCartSlice'


export default configureStore({
  reducer: {
    products,
    shoppingCart
  }
})