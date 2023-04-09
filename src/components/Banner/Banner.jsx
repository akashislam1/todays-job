import React from "react";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 mt-7 p-1">
      <div className="mt-5">
        <h1 className="lg:text-6xl text-2xl font-semibold">
          One Step Closer To Your <br />
          <span className=" text-[#7E90FE]">Dream Job</span>
        </h1>
        <p className="text-[#757575] my-7">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <div>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
      <div className="mt-5">
        <img
          className="object-cover "
          src="../../../src/assets/person.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
