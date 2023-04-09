import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const JobSection = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("../../../public/category.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className=" my-32 p-1">
      <div className=" lg:text-center">
        <h1 className="text-2xl lg:text-5xl font-bold">Job Category List</h1>
        <p className="text-primary mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" md:flex  justify-between gap-4 mt-8">
        {jobs.map((job, index) => (
          <SingleJob key={index} job={job}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default JobSection;
