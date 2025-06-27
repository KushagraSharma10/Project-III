import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncRegisterUser } from "../../store/actions/userActions";
import { Link } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";

const ProductDetails = () => {

  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.products);
  const product = products?.find((product) => product.id === id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues : {
      title : product?.title,
      image: product?.image,
      description: product?.description,
      price: product?.price,
      category: product?.category,


    }
  });
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UpdateProductHandler = (product) => {
    product.id = nanoid();
    console.log(product);
    dispatch(asyncCreateProduct(product));
    navigate("/products");
  };

  const fields = [
    { type: "url", label: "image", placeholder: "Image URL" },
    { type: "text", label: "title", placeholder: "Title" },
    { type: "number", label: "price", placeholder: "0.00" },
    { type: "text", label: "category", placeholder: "Category" },
  ];

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
      <form
      onSubmit={handleSubmit(UpdateProductHandler)}
      className="bg-zinc-900 w-[40vw] my-10 rounded-lg shadow-xl px-5 py-8"
    >
      <h1 className="text-center text-2xl">Create Product</h1>

      {fields.map((field, index) => (
        <div key={index} className="flex flex-col mt-3 gap-3">
          <label className="capitalize" htmlFor={field.label}>
            {field.label}
          </label>
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
          className="px-3 py-2 rounded-md border-2 outline-none text-white placeholder:text-zinc-400 border-zinc-700 resize-none "
          placeholder="Enter product description..."
        />
      </div>

      <button className="px-3 mt-5 w-full py-1.5 font-semibold bg-green-600 rounded-md">
        update Product
      </button>
    </form>
    </div>
  );
};

export default ProductDetails;
