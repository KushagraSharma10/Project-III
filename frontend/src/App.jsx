import React, { useEffect } from "react";

import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {

  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(asyncCurrentUser())
      dispatch(asyncLoadProducts())
    })

  return (
    <div className="w-screen px-[10%] h-screen bg-zinc-800 text-white">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
