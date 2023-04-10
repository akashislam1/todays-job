import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative">
      <div className="shadow-md rounded-md p-3 flex justify-between items-center">
        <div>
          <Link to="/" className="inline-flex items-center">
            <span className=" text-xl font-bold tracking-wide text-gray-800 ">
              Today'S <span className="text-gradiant">JOB</span>
            </span>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-4 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/appliedJob">Applied Jobs</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="btn-primary">Start Applying</button>
        </div>
        <div className="lg:hidden">
          <Bars4Icon
            onClick={() => setMenuOpen(true)}
            className="w-6 h-6 "
          ></Bars4Icon>
        </div>
      </div>
      {menuOpen && (
        <div>
          <div className="absolute  inset-x-0 top-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4">
            <XMarkIcon
              onClick={() => setMenuOpen(false)}
              className="w-6 h-6 absolute top-2 right-5 "
            ></XMarkIcon>
            <ul className="font-semibold">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/appliedJob">Applied Jobs</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
