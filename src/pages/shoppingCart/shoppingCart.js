import React from 'react';
import ShoppingCartData from "./components/shoppingCartData";
import {useSelector} from "react-redux";
import {container} from "../../Style";

const ShoppingCart = () => {
  const { cartItems } = useSelector(state => state.shoppingCart)
  
  return (
    <div style={container}>
      <ShoppingCartData
        cartItems={cartItems}
      />
    </div>
  );
};

export default ShoppingCart;