import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex items-center py-10 justify-center mb-10 space-x-10'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to ="/products">Products</NavLink>
        <NavLink to = "/login">Login</NavLink>
    </nav>
  )
}

export default Nav