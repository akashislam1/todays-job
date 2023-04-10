import React from "react";
import { useLoaderData } from "react-router-dom";
import AppLiedJobDetails from "./appLiedJobDetails";

const AppliedJobs = () => {
  const { jobAppliedArray } = useLoaderData();

  return (
    <>
      <div className=" lg:text-center my-10 ">
        <h1 className="text-2xl lg:text-5xl font-bold">Applied Jobs</h1>
      </div>
      {jobAppliedArray?.map((apData) => (
        <AppLiedJobDetails key={apData.id} apData={apData}></AppLiedJobDetails>
      ))}
    </>
  );
};

export default AppliedJobs;
