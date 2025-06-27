import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.products);
  const product = products?.find((product) => product.id === id);
  console.log(product);

  return (
    <div className="w-full">
      <div className="flex">
        <div className="w-[50vw]">
          <div className="w-[30vw]">
            <img
              src={product.image}
              alt=""
              className="w-full h-[50vh] object-cover"
            />
          </div>
        </div>
        <div className="px-5 h-full">
          <h1 className="text-3xl">{product.title}</h1>
          <p className="text-2xl mt-3 text-green-400">${product.price}</p>
          <p className="mt-5">{product.description}</p>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;
