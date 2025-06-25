import React, { useEffect } from "react";

import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";

const App = () => {

  return (
    <div className="w-screen px-[10%] h-screen bg-zinc-800 text-white">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
