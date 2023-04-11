import React from "react";
// import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Assignment 1", marks: 60 },
  { name: "Assignment 2", marks: 58 },
  { name: "Assignment 3", marks: 60 },
  { name: "Assignment 4", marks: 58 },
  { name: "Assignment 5", marks: 60 },
  { name: "Assignment 6", marks: 60 },
  { name: "Assignment 7", marks: 60 },
  { name: "Assignment 8", marks: 56 },
];

const Statistics = () => {
  return (
    <>
      <div className=" lg:text-center my-8 ">
        <h1 className="text-2xl lg:text-5xl font-bold">Assignment Marks</h1>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marks"
              stroke="#8884d8"
              fill="#1cb4bd"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statistics;
