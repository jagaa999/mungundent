import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Label,
  LabelList,
} from "recharts";

// import data from "./motoData";

const MotoTinyBarChart = ({ data, rating }) => (
  <ResponsiveContainer width="100%" height={370}>
    <BarChart data={data} margin={{ top: 30, right: 0, left: -15, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis hide />
      {/* <CartesianGrid strokeDasharray="7 5" /> */}
      {/* <Tooltip /> */}
      <Legend />
      <Bar dataKey="Стандарт" fill="#52c41a">
        <LabelList dataKey="Стандарт" position="top" />
      </Bar>
      <Bar
        dataKey="Таных"
        fill={
          rating === "Хэвийн"
            ? "#52c41a"
            : rating === "Анхаар!"
            ? "#fa8c16"
            : "#f44336"
        }
      >
        <LabelList dataKey="Таных" position="top" />
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default MotoTinyBarChart;
