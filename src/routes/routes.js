import React from 'react';
import {Route} from "react-router-dom";
import Products from "../pages/products/products";
import ShoppingCart from "../pages/shoppingCart/shoppingCart";

const Routes = () => {
  return [
    <Route key={1} path={["/", "/products"]} exact={true} component={Products}/>,
    <Route key={2} path="/shoppingcart" exact={true} component={ShoppingCart}/>,
  ]
};

export default Routes;