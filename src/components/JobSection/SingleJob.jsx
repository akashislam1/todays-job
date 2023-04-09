import React from "react";

const SingleJob = ({ job }) => {
  const { img, jobAvailable, jobTitle } = job;
  return (
    <div className="bg-[#9873FF0D] p-9 rounded-md my-4 shadow-md">
      <img className="bg-[#7b53e70d] p-3" src={img} alt="" />
      <div className="mt-7">
        <h3 className="text-2xl font-semibold">{jobTitle}</h3>
        <p className="text-[#A3A3A3] mt-2">{jobAvailable} Jobs Available</p>
      </div>
    </div>
  );
};

export default SingleJob;
