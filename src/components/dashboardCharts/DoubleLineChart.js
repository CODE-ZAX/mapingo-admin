import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Last Year",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function DoubleLineChart() {
  const { Colors } = useData();
  return (
    <div
      className={
        classes.lineChart + " d-flex justify-content-center align-items-center"
      }
    >
      <Line
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: "2022",
              data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
              ),
              backgroundColor: Colors.primaryColor + "dd",
              borderColor: Colors.primaryColor + "99",
            },
            {
              label: "2023",
              data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
              ),
              borderColor: Colors.accentColor + "dd",
              backgroundColor: Colors.accentColor + "aa",
            },
          ],
        }}
      />
    </div>
  );
}
