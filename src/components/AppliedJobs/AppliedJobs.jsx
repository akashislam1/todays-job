import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppLiedJobDetails from "./appLiedJobDetails";

const AppliedJobs = () => {
  const { jobAppliedArray } = useLoaderData();
  const [remoteJobs, setRemoteJobs] = useState(jobAppliedArray);
  const [onsiteJobs, setOnsiteJobs] = useState(jobAppliedArray);
  const [remoteOnsiteJobs, setRemoteOnsiteJobs] = useState(jobAppliedArray);

  const pickRemoteJob = () => {
    const remoteJob = remoteJobs.filter(
      (appliedJob) => appliedJob.remoteOrOnsite === "Remote"
    );
    setRemoteJobs(remoteJob);
    setRemoteOnsiteJobs(remoteJob);
  };
  const pickOnsiteJob = () => {
    const onsiteJob = onsiteJobs.filter(
      (appliedJob) => appliedJob.remoteOrOnsite === "Onsite"
    );
    setOnsiteJobs(onsiteJob);
    setRemoteOnsiteJobs(onsiteJob);
  };
  return (
    <>
      <div className=" lg:text-center my-10 ">
        <h1 className="text-2xl lg:text-5xl font-bold">Applied Jobs</h1>
      </div>
      {jobAppliedArray.length ? (
        <div className="text-right mr-5">
          <button className="btn-secondary mr-3" onClick={pickRemoteJob}>
            Remote
          </button>
          <button className="btn-secondary" onClick={pickOnsiteJob}>
            Onsite
          </button>
        </div>
      ) : (
        <div className="lg:text-center lg:text-2xl lg:font-semibold font-semibold">
          <h4>You do not Apply</h4>
        </div>
      )}

      {remoteOnsiteJobs
        ? remoteOnsiteJobs?.map((apData) => (
            <AppLiedJobDetails
              key={apData.id}
              apData={apData}
            ></AppLiedJobDetails>
          ))
        : jobAppliedArray?.map((apData) => (
            <AppLiedJobDetails
              key={apData.id}
              apData={apData}
            ></AppLiedJobDetails>
          ))}
    </>
  );
};

export default AppliedJobs;
