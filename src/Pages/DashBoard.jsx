import React from "react";
import OverViewChartsCards from "../Components/Charts/OverViewChartsCards";

const DashBoard = () => {
  return (
    <div className="w-full h-screen  ">
      <section className="w-full grid grid-flow-col">
        <OverViewChartsCards />
        <OverViewChartsCards />
        <OverViewChartsCards />
        <OverViewChartsCards />
      </section>
    </div>
  );
};

export default DashBoard;
