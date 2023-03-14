import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Opt-in", "Opt-out"],
  datasets: [
    {
      label: "# of Users",
      data: [12, 19],
      backgroundColor: ["#AAAAAAaa", "rgba(54, 162, 235, 0.5)"],
      borderColor: ["#AAAAAA", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}
