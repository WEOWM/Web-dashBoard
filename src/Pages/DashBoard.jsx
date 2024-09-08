import React from "react";
import OverViewChartsCards from "../Components/Charts/OverViewChartsCards";

const DashBoard = () => {


  const ChartData = [
    {
      name: "sales",
      color: "#FF5733", // Hex code for red-orange
      cData: [
        {
          name: 'sales1',
          uv: 4500,
          pv: 2600,
          amt: 2500,
        },
        {
          name: 'sales2',
          uv: 3200,
          pv: 1500,
          amt: 2100,
        },
        {
          name: 'sales3',
          uv: 1800,
          pv: 9000,
          amt: 1900,
        },
        {
          name: 'sales4',
          uv: 2900,
          pv: 4000,
          amt: 2200,
        },
        {
          name: 'sales5',
          uv: 2100,
          pv: 4900,
          amt: 2300,
        },
        {
          name: 'sales6',
          uv: 2500,
          pv: 4100,
          amt: 2600,
        },
        {
          name: 'sales7',
          uv: 3700,
          pv: 4600,
          amt: 2400,
        },
      ],
    },
    {
      name: "overView",
      color: "#33A1FF", // Hex code for blue
      cData: [
        {
          name: 'overView1',
          uv: 4200,
          pv: 2800,
          amt: 2300,
        },
        {
          name: 'sales4',
          uv: 2900,
          pv: 4000,
          amt: 2200,
        },
        {
          name: 'sales5',
          uv: 2100,
          pv: 4900,
          amt: 2300,
        },
        {
          name: 'overView2',
          uv: 3800,
          pv: 3100,
          amt: 2600,
        },
      ],
    },
    {
      name: "Profit",
      color: "#28A745", // Hex code for green
      cData: [
        {
          name: 'Profit1',
          uv: 5000,
          pv: 3400,
          amt: 3100,
        },
        {
          name: 'Profit2',
          uv: 5500,
          pv: 3700,
          amt: 3600,
        },
        {
          name: 'sales4',
          uv: 2900,
          pv: 4000,
          amt: 2200,
        },
        {
          name: 'sales5',
          uv: 2100,
          pv: 4900,
          amt: 2300,
        },
      ],
    },
    {
      name: "Revenue",
      color: "#8A2BE2", // Hex code for purple
      cData: [
        {
          name: 'sales4',
          uv: 2900,
          pv: 4000,
          amt: 2200,
        },
        {
          name: 'sales5',
          uv: 2100,
          pv: 4900,
          amt: 2300,
        },
        {
          name: 'Revenue1',
          uv: 4800,
          pv: 3500,
          amt: 3700,
        },
        {
          name: 'Revenue2',
          uv: 5300,
          pv: 4000,
          amt: 4100,
        },
      ],
    },
  ];
  

  return (
    <div className="w-full h-screen  ">
      <section className="w-full grid grid-cols-4 max-sm:grid-cols-1 gap-[20px] p-4">
        {
          ChartData.map((item, idx) => {
            return (
              <div className="grid-cols-3" key={idx}>
                <OverViewChartsCards data={item} />
              </div>
            )
          })
        }
      </section>
      <section>
        
      </section>
    </div>
  );
};

export default DashBoard;
