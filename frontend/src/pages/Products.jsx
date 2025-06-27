import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);

  const AddToCartHandler = (id) => {
    const copyUser = { ...users };
    const x = copyUser.cart.find((e) => e.id == id);
    console.log(x);
  };

  const renderProducts = products.map((product, index) => {
    return (
      <div
        key={index}
        className="w-[24vw] rounded-md overflow-hidden bg-zinc-900 border border-zinc-700 shadow"
      >
        <img
          className="w-full h-[20vh] object-cover"
          src={product.image}
          alt=""
        />
        <div className="px-4 py-5 flex flex-col gap-4 justify-between">
          <h1>{product.title}</h1>
          <small>{product.description.slice(0, 100)}...</small>
          <div className="flex items-center justify-between my-2">
            <p>{product.price}</p>
            <button onClick={() => AddToCartHandler(product.id)}>
              Add to cart
            </button>
          </div>
          <Link className="" to={`/product/${product.id}`}>
            More Info
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full  flex items-center flex-wrap">{renderProducts}</div>
  );
};

export default Products;
