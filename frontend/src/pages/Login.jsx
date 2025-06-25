import React from "react";

const Login = () => {
  const fields = [
    { type: "text", label: "Name" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" },
  ];

  return (
    <form className="bg-zinc-900 w-[40vw] rounded-lg shadow-xl px-5 py-10">
      <h1 className="text-center text-2xl">Login</h1>
      <>
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col mt-3 gap-2">
            <label htmlFor="email">{field.label}</label>
            <input
              type={field.type}
              className="px-3 py-2 rounded-md border-2 outline-none border-zinc-700 "
            />
          </div>
        ))}
      </>
      {/* <div className="flex flex-col gap-2">
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
      </div> */}
    </form>
  );
};

export default Login;
