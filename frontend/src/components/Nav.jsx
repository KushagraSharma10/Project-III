import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex items-center py-10 justify-center mb-10 space-x-10'>
        <NavLink>Home</NavLink>
        <NavLink>Products</NavLink>
    </nav>
  )
}

export default Nav