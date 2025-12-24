import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Charts = ({ ratings }) => {
    
  const data = ratings.map((r) => ({
    name: r.name,
    count: r.count,
  }));

  return (
    <div className="w-full h-90" style={{ width: "100%", height: 400 }}>

      <ResponsiveContainer>
        <BarChart layout="vertical" data={data} margin={top-0} >
          <XAxis type="number"/>
          <YAxis
            dataKey="name"
            type="category"
            axisLine={{ stroke: "#F5F5F5", strokeWidth: 30 }} />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" barSize={32} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
