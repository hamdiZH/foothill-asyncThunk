import React, {useEffect} from 'react';
import ProductsData from "./components/productsData";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../store/productsSlice";
import {container} from "../../Style";

const Products = () => {
  const dispatch = useDispatch();
  const {products, isLoading} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div style={container}>
      <ProductsData
        products={products}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Products;