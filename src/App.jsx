import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="w-full lg:w-5/6 mx-auto p-2">
      <Header></Header>
      <div className="md:min-h-[calc(100vh-230px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
