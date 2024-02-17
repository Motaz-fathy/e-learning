import React from "react";
import { ExpenseRatioChart, LineChart } from "../../../shared/Charts";

export const Section2 = () => {
  return (
    <div className="w-full flex justify-center items-center gap-2 max-sm:flex-col ">
      <LineChart />
      <ExpenseRatioChart />
    </div>
  );
};
