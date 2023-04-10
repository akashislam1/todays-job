import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";
const data = [
  { name: "Assignment 1", value: 60 },
  { name: "Assignment 2", value: 58 },
  { name: "Assignment 3", value: 60 },
  { name: "Assignment 4", value: 58 },
  { name: "Assignment 5", value: 60 },
  { name: "Assignment 6", value: 60 },
  { name: "Assignment 7", value: 60 },
  { name: "Assignment 8", value: 56 },
];

const Statistics = () => {
  return (
    <>
      <div className=" lg:text-center my-8 ">
        <h1 className="text-2xl lg:text-5xl font-bold">Assignment Marks</h1>
      </div>
      <div style={{ width: "100%", height: 300 }} className=" my-8 lg:my-16">
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statistics;
