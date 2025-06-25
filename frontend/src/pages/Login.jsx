import React from "react";

const Login = () => {

  return (
    <form className="bg-zinc-900 w-[50vw] px-5 py-10">
      <h1 className="text-center text-2xl">Login</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input type="text" className="px-3 py-2 rounded-md border-2 outline-none border-zinc-600 " />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input type="email" className="px-3 py-2 rounded-md border-2 outline-none border-zinc-600 " />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input type="password" className="px-3 py-2 rounded-md border-2 outline-none border-zinc-600 " />
      </div>
    </form>
  );
};

export default Login;
