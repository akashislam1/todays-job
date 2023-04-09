import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full lg:w-5/6 mx-auto p-2">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
