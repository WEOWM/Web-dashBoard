import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const OverViewChartsCards = ({ data }) => {

  const dKey = data?.cData.map((item)=> item)

  console.log('====================================');
  console.log("swdwe", dKey?.name);
  console.log('====================================');

  return (
    <div className="w-fit bg-white shadow-md rounded-md">
      <p>{data.name}</p>
      <AreaChart
        width={300}
        height={150}
        data={data.cData}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={data.color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={data.color} stopOpacity={0} />
          </linearGradient>
        </defs>

        <Tooltip />
        <Area type="monotone" dataKey="uv" stackId="1" stroke={data.color} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  );
};

export default OverViewChartsCards;
