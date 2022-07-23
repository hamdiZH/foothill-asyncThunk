import React from 'react';
import ProductCard from "../../../shared/productCard";

const ShoppingCartData = ({cartItems}) => {
  return (
    <div>
      {cartItems?.length > 0 ? cartItems?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartPage
          // cartItems={cartItems}
        />
      )) : 'There is no Products in your cart'}
    </div>
  );
};

export default ShoppingCartData;