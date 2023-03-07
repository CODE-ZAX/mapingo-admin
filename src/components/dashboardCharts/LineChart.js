import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import classes from "./LineChart.module.css";
import { useData } from "../../context/DataContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Year 2023",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function LineChart() {
  const { Colors } = useData();
  return (
    <div
      className={
        classes.lineChart + " justify-content-center align-items-center"
      }
    >
      <Line
        options={options}
        data={{
          labels,
          datasets: [
            {
              fill: true,
              label: "Active Users",
              data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
              ),
              borderColor: Colors.accentColorLight,
              backgroundColor: Colors.accentColor + "aa",
            },
          ],
        }}
      />
    </div>
  );
}
