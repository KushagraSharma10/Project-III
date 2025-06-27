import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from "../../store/actions/userActions";

const UserProfile = () => {
  const users = useSelector((state) => state.userReducer.users);
  

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      Name: users?.Name,
      Email: users?.Email,
      Password: users?.Password,
    },
  });
  console.log(users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UpdateUserHandler = (user) => {
    console.log(user);
    dispatch(asyncUpdateUser(users.id, user));
  };

  const LogoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
  };


  const DeleteHandler = () => {
    dispatch(asyncDeleteUser(users.id));
    navigate("/login");
  };

  const fields = [
    { type: "text", label: "Name", placeholder: "John Doe" },
    { type: "email", label: "Email", placeholder: "JohnDoe@gmail.com" },
    { type: "password", label: "Password", placeholder: "******" },
  ];

  return users ? (
    <form
      onSubmit={handleSubmit(UpdateUserHandler)}
      className="bg-zinc-900 w-[40vw] my-10 rounded-lg shadow-xl px-5 py-8"
    >
      <h1 className="text-center text-2xl">User Details</h1>

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

      <div className="w-full">
        <button className="px-3 mt-5 w-full py-1.5 font-semibold bg-green-600 rounded-md">
          Update user
        </button>
        <button
          type="button"
          onClick={DeleteHandler}
          className="px-3 mt-5 w-full py-1.5 font-semibold bg-red-600 rounded-md"
        >
          Delete user
        </button>

        <button
          type="button"
          onClick={LogoutHandler}
          className="px-3 mt-5 w-full py-1.5 font-semibold bg-orange-600 rounded-md"
        >
          Logout user
        </button>

      </div>
    </form>
  ) : (
    "Loading..."
  );
};

export default UserProfile;
