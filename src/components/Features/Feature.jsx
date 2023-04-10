import React from "react";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  // console.log(feature);
  const {
    id,
    companyLogo,
    companyName,
    jobTitle,
    fulltimeOrPartTime,
    remoteOrOnsite,
    location,
    salary,
  } = feature;
  return (
    <div className="my-4 border-2 p-7 rounded-md">
      <img className="w-36 h-20 rounded-md" src={companyLogo} alt="" />
      <div className="mt-7 mb-3">
        <h1 className="text-2xl font-semibold">{jobTitle}</h1>
        <p className="text-primary">{companyName}</p>
      </div>
      <div className="flex gap-5 mb-3">
        <button className="btn-secondary">{remoteOrOnsite}</button>
        <button className="btn-secondary">{fulltimeOrPartTime}</button>
      </div>
      <div className="flex gap-5 mb-5 text-primary">
        <p>Location : {location}</p>
        <p>Salary : BDT {salary} Tk</p>
      </div>
      <div>
        <Link to={`/feature/${id}`}>
          <button className="btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Feature;
