import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const {id} = useParams();
  const products = useSelector((state) => state.productReducer.products);
  const product = products?.find((product)=> product.id === id)
  console.log(product) 

  return <div>ProductDetails</div>;
};

export default ProductDetails;
