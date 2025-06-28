import React, { useEffect } from "react";
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();

  const  users   = useSelector((state) => state.userReducer.users);
  const products  = useSelector((state) => state.productReducer.products);

  console.log(users)
  console.log(products)

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products]);

  return (
    <div className="overflow-auto w-screen px-[10%] h-screen bg-zinc-800 text-white">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
