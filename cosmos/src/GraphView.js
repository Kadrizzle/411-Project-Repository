import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const GraphView = ({ data }) => {
  const chartData = Object.keys(data).map((day) => ({
    name: day,
    value: data[day],
  }));

  return (
    <div>
      <h2>Graph View</h2>
      <LineChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default GraphView;
