import React from 'react';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../store/shoppingCartSlice";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import {card, productImage} from "../Style";

const ProductCard = ({product, cartPage}) => {
  const dispatch = useDispatch()
  const {cartItems} = useSelector(state => state.shoppingCart)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div style={card}>
      <div style={{width: 200}}>
        {product.name}
      </div>
      <div style={{width: 200}}>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={product.image} alt='product image' style={productImage}/>
      </div>
      <div style={{width: 550}}>
        {product.description}
      </div>
      <div style={{width: 100, marginLeft: 40}}>
        Price: {product.price}
      </div>
      <div style={{width: 300, marginLeft: 40}}>
        {cartPage ? (
          <Button variant='contained' onClick={() => handleRemoveFromCart(product.id)}>Remove from cart</Button>
        ) : (
          <>
            <Button variant='contained' onClick={() => handleAddToCart(product)}>Add To Shopping Cart</Button>
            {cartItems?.some(item => item.id === product.id) ? (
              <CheckCircleSharpIcon style={{marginLeft: 50, color: 'green'}}/>
            ): null}
          </>

        )}
      </div>
    </div>

  );
};

export default ProductCard;