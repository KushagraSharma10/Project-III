import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";

const Products = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);


  const AddToCartHandler = (product) => {
    const copyUser = { ...users, cart: [...users.cart] };
    const index = copyUser.cart.findIndex((c) => c?.product?.id == product.id);
    if (index == -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[index] = {
        product,
        quantity: copyUser.cart[index].quantity + 1,
      };
    }

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
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
            <button onClick={() => AddToCartHandler(product)}>
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
