import React from "react";
// import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart width={500} height={400} data={data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" barSize={20} fill="#413ea0" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statistics;
