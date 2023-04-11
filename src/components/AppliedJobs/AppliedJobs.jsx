import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AppLiedJobDetails from "./appLiedJobDetails";

const AppliedJobs = () => {
  const { jobAppliedArray } = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);

  const pickRemoteJob = () => {
    const remoteJob = jobAppliedArray.filter(
      (appliedJob) => appliedJob.remoteOrOnsite === "Remote"
    );
    setAppliedJob(remoteJob);
  };
  const pickOnsiteJob = () => {
    const onsiteJob = jobAppliedArray.filter(
      (appliedJob) => appliedJob.remoteOrOnsite === "Onsite"
    );
    setAppliedJob(onsiteJob);
  };
  return (
    <>
      <div className=" lg:text-center my-10 ">
        <h1 className="text-2xl lg:text-5xl font-bold">Applied Jobs</h1>
      </div>
      <div className="text-right mr-5">
        <button className="btn-secondary mr-3" onClick={pickRemoteJob}>
          Remote
        </button>
        <button className="btn-secondary" onClick={pickOnsiteJob}>
          Onsite
        </button>
      </div>
      {appliedJob?.map((apData) => (
        <AppLiedJobDetails key={apData.id} apData={apData}></AppLiedJobDetails>
      ))}
    </>
  );
};

export default AppliedJobs;
