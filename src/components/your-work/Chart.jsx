import React from "react";
import "./chart.scss";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const Chart1 = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Scheduled",
        data: [12, 19, 30, 20, 15, 8],
        backgroundColor: "#264ECA",
      },
      {
        label: "Done",
        data: [8, 14, 13, 10, 5, 7],
        backgroundColor: "#08D604",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="chart">
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart1;
