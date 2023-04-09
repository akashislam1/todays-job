import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { Id } = useParams();
  const [allData, setAllData] = useState([]);
  const [singleJobDetail, setSingleJobDetail] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  useEffect(() => {
    const singleData = allData.filter((sData) => sData.id === Id);
    setSingleJobDetail(singleData[0]);
  }, [allData]);
  return (
    <>
      <div className=" lg:text-center my-8">
        <h1 className="text-2xl lg:text-5xl font-bold">Job Details</h1>
      </div>
      <div className="flex">
        <div>
          <h1>Description</h1>
        </div>
        <div>
          <h3>Job details</h3>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
