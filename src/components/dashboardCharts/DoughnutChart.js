import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import classes from "./LineChart.module.css";
import { PieChart } from "./PieChart";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Pakistan", "Japan", "America", "Saudia", "Italy"],
  datasets: [
    {
      label: "# of Visitors",
      data: [12, 19, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function DougnutChart() {
  return (
    <div className={classes.doughnut}>
      <div className={classes.chart}>
        <Doughnut data={data} />
      </div>
      <div className={classes.chart}>
        <PieChart />
      </div>
    </div>
  );
}
