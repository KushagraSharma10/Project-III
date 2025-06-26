import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    console.log(user);
    //   dispatch(asyncRegisterUser(user));
    navigate("/products")
  };

  const fields = [
    { type: "url", label: "imageUrl", placeholder: "Image URL" },
    { type: "text", label: "title", placeholder: "Title" },
    { type: "number", label: "price", placeholder: "0.00" },
    { type: "text", label: "category", placeholder: "Category" },
  ];

  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="bg-zinc-900 w-[40vw] rounded-lg shadow-xl px-5 py-8"
    >
      <h1 className="text-center text-2xl">Create Product</h1>
      
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col mt-3 gap-3">
            <label className="capitalize" htmlFor={field.label}>{field.label}</label>
            <input
              type={field.type}
              {...register(`${field.label}`)}
              className="px-3 py-2 rounded-md border-2 outline-none border-zinc-700 "
              placeholder={field.placeholder}
            />
          </div>
        ))}
         <div className="flex flex-col mt-3 gap-2">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={4}
          {...register("description")}
          className="px-3 py-2 rounded-md border-2 outline-none text-white placeholder:text-zinc-400 border-zinc-700 resize-none text-black"
          placeholder="Enter product description..."
        />
      </div>
      
      <button className="px-3 mt-5 w-full py-1.5 font-semibold bg-green-600 rounded-md">
        Create Product
      </button>
    </form>
  );
};

export default CreateProduct;
