import React, { useEffect, useState } from "react";
import Feature from "./Feature";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <>
      <div className=" my-28 p-1">
        <div className=" lg:text-center">
          <h1 className="text-2xl lg:text-5xl font-bold">Featured Jobs</h1>
          <p className="text-primary mt-3">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 ">
          {features?.slice(0, showAll ? 10 : 4).map((feature) => (
            <Feature key={feature.id} feature={feature}></Feature>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-5">
            <button onClick={handleShowAll} className="btn-primary">
              See All Jobs
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Features;
