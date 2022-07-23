import React, {useState} from 'react';
import {Button} from "@mui/material";
import ProductsCard from "../../../shared/productCard";
import AddProductModal from "./addProductModal";


const ProductsData = ({products}) => {

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true)
  }
  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant='contained' onClick={() => handleOpenModal()} style={{marginBottom: 30}}>Add New Product</Button>
      <AddProductModal open={open} onClose={handleCloseModal}/>
      {products?.length > 0 ? products?.map((product) => (
        <ProductsCard
          key={product.id}
          product={product}
        />
      )) : 'There is no Products available'}
    </div>
  );
};

export default ProductsData;