import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

  const {register, handleSubmit, reset} = useForm();

  const submitHandler = (data) =>{
      console.log(data)
  }

const fields = [
  { type: "text", label: "Name" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
];

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="bg-zinc-900 w-[40vw] rounded-lg shadow-xl px-5 py-10">
    <h1 className="text-center text-2xl">Register</h1>
    <>
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col mt-3 gap-2">
          <label htmlFor="email">{field.label}</label>
          <input
            type={field.type}
            {...register(`${field.label}`)}
            className="px-3 py-2 rounded-md border-2 outline-none border-zinc-700 "
          />
        </div>
      ))}
    </>
    <button className="px-3 mt-5 w-full py-1 font-semibold bg-green-600 rounded-md">Register User</button>
    <p className="mt-5">
      Already have an account? <Link to = "/login" className = "text-blue-400">Login</Link>
    </p>
  </form>
  )
}

export default Register