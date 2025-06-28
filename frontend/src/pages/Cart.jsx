import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  const increaseQuantityHandler = (index, product) => {
    const copyUser = { ...users, cart: [...users.cart] };

    copyUser.cart[index] = {
      ...copyUser.cart[index],
      quantity: copyUser.cart[index].quantity + 1,
    };
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
    console.log(copyUser);
  };

  const decreaseQuantityHandler = (index, product) => {
    const copyUser = { ...users, cart: [...users.cart] };

    if(users.cart[index].quantity > 0){
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity - 1,
      } } else{
        copyUser.cart = []
      }

    
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
    console.log(copyUser);
  };

  const cartItems = users.cart.map((c, index) => (
    <li key={c.product.id} className="flex items-center justify-between">
      <img
        className="w-[10vmax] h-[10vmax] object-cover"
        src={c.product.image}
        alt=""
      />

      <span>{c.product.title}</span>
      <span>$ {c.product.price}</span>
      <p>
        <span
          onClick={() => decreaseQuantityHandler(index, c)}
          className="text-xl"
        >
          -
        </span>
        <span className="mx-3 p-2 rounded bg-gray-700">{c.quantity}</span>
        <span
          onClick={() => increaseQuantityHandler(index, c)}
          className="text-lg"
        >
          +
        </span>
      </p>
    </li>
  ));

  return <div>{cartItems}</div>;
};

export default Cart;
