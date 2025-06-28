import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userActions";
import { nanoid } from "@reduxjs/toolkit";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    console.log(user);
    dispatch(asyncRegisterUser(user));
    navigate("/login");
    reset();
  };

  const fields = [
    { type: "text", label: "Name", placeholder: "John Doe" },
    { type: "email", label: "Email", placeholder: "JohnDoe@gmail.com" },
    { type: "password", label: "Password", placeholder: "******" },
  ];

  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="bg-zinc-900 w-[40vw] rounded-lg shadow-xl px-5 py-10"
    >
      <h1 className="text-center text-2xl">Register</h1>
      <>
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col mt-3 gap-2">
            <label htmlFor="email">{field.label}</label>
            <input
              type={field.type}
              {...register(`${field.label}`)}
              className="px-3 py-2 rounded-md border-2 outline-none border-zinc-700 "
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </>
      <button className="px-3 mt-5 w-full py-1 font-semibold bg-green-600 rounded-md">
        Register User
      </button>
      <p className="mt-5">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
