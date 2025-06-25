import axios from "./api/axiosconfig";
import React, { useEffect } from "react";

const App = () => {
  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div>App</div>;
};

export default App;
