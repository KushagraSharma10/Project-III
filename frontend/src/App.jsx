import React, { useEffect } from "react";
import { asyncGetUsers } from "./store/userActions";

const App = () => {
  useEffect(() => {
    asyncGetUsers();
  }, []);

  return <div className="w-screen h-screen bg-zinc-800 text-white">App</div>;
};

export default App;
