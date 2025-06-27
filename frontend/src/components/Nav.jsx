import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <nav className="flex items-center py-5 justify-center mb-10 space-x-10">
      <NavLink to={"/"}>Home</NavLink>
      {user ? (
        <>
          {user && user?.isAdmin && (
            <NavLink to="/admin/create-product">Create Product</NavLink>
          )}

          <NavLink to="/admin/user-profile">Settings</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
