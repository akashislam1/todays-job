import React from "react";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const { jobAppliedArray } = useLoaderData();
  //   const appliedJobsData = getJobApplyData();
  console.log(jobAppliedArray);
  return (
    <div className=" lg:text-center my-10 ">
      <h1 className="text-2xl lg:text-5xl font-bold">Applied Jobs</h1>
    </div>
  );
};

export default AppliedJobs;
