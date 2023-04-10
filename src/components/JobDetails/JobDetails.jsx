import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToDb } from "../../FakeDb/FakeDb";

const JobDetails = () => {
  const { Id } = useParams();
  const [allData, setAllData] = useState([]);
  const [singleJobDetail, setSingleJobDetail] = useState([]);
  const [jobDatas, setJobDatas] = useState([]);

  const handleApplyNow = (id) => {
    console.log(id);
    addToDb(id);
  };
  // const handleApplyNow = (id) => {
  //   const jobData = jobDatas.find((data) => data === id);
  //   if (jobData) {
  //     setJobDatas([...jobDatas, id]);
  //     return alert("Job");
  //   } else {
  //     setJobDatas([...jobDatas, id]);
  //   }
  // };

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
      <div className=" lg:text-center my-8 ">
        <h1 className="text-2xl lg:text-5xl font-bold">Job Details</h1>
      </div>
      <div className="lg:flex gap-4 ">
        {singleJobDetail && (
          <>
            <div className="w-full flex flex-col gap-6 lg:w-4/6 mb-7">
              <div>
                <p>
                  <span className="font-bold">Job Description :</span>{" "}
                  {singleJobDetail?.jobDescription}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Job Responsibility :</span>{" "}
                  {singleJobDetail?.jobResponsibility}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Educational Requirements :</span>{" "}
                  {singleJobDetail?.educationalRequirements}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Experiences :</span>{" "}
                  {singleJobDetail?.experiences}
                </p>
              </div>
            </div>
            <div className="bg-[#9873FF1A] p-6 w-full  lg:w-2/5">
              <h3 className="font-bold text-xl">Job details</h3>
              <hr className="my-5 " />
              <div>
                <p className="font-bold ">
                  Salary :{" "}
                  <span className="text-primary">
                    BDT {singleJobDetail?.salary} Tk
                  </span>
                </p>
                <p className="font-bold ">
                  Job Title :{" "}
                  <span className="text-primary">
                    {singleJobDetail?.jobTitle}
                  </span>
                </p>
              </div>
              <div className="mt-8">
                <h2 className="font-bold text-xl">Contact Information</h2>
                <hr className="my-5 " />
                <div>
                  <p className="font-bold ">
                    Phone :{" "}
                    <span className="text-primary">
                      {singleJobDetail?.contactInformation?.phone}
                    </span>
                  </p>
                  <p className="font-bold ">
                    Email :{" "}
                    <span className="text-primary">
                      {singleJobDetail?.contactInformation?.email}
                    </span>
                  </p>
                  <p className="font-bold ">
                    Address :{" "}
                    <span className="text-primary">
                      {singleJobDetail?.location}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => handleApplyNow(singleJobDetail?.id)}
                  className="btn-primary w-full"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default JobDetails;
