import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  const cartItems = users.cart.map((c)=> (
    <li key={c.product.id} className='flex items-center justify-between'>
      <img 
      className='w-[10vmax] h-[10vmax] object-cover'
      src = {c.product.image} 
      alt= ""
      />

      <span>{c.product.title}</span>
      <span>$ {c.product.price}</span>
      <p>
        <span className='text-xl'>-</span>
        <span className='mx-3 p-2 rounded bg-gray-700'>{c.quantity}</span>
        <span className='text-lg'>+</span>
      </p>
    </li>
  ))


  return (
    <div>{cartItems}</div>
  )
}

export default Cart