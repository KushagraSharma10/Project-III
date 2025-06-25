import React, { useEffect } from "react";
import { asyncGetUsers } from "./store/actions/userActions";

import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";

const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  return (
    <div className="w-screen px-[10%] h-screen bg-zinc-800 text-white">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
