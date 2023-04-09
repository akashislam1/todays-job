import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow-md rounded-md p-3  flex justify-between items-center">
      <div>
        <Link to="/" className="inline-flex items-center">
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
            Today'S JOB
          </span>
        </Link>
      </div>
      <div>
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
      <div>
        <button className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md font-bold">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
