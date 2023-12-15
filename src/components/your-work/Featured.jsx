import React from "react";
import "./featured.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const Featured = () => {
  const data = {
    labels: ["Done", "Canceled", "Scheduled", "Processing"],
    datasets: [
      {
        data: [40, 7, 35, 18],
        backgroundColor: ["#08D604", "#E70A0A", "#264ECA", "#FFE976"],
        hoverBackgroundColor: ["#08D604", "#E70A0A", "#264ECA", "#FFE976"],
      },
    ],
  };
  const options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const value = dataset.data[tooltipItem.index];
          const label = data.labels[tooltipItem.index];
          return label + ": " + value;
        },
      },
    },
  };

  return (
    <div className="featured">
      <Doughnut data={data} options={options.tooltips.callbacks} />
      {/* <div className="tiendo">
        <p>
          <span className="dot sche">&#8226;</span> Scheduled
        </p>
        <p>
          <span className="dot done">&#8226;</span> Done
        </p>
        <p>
          <span className="dot pro">&#8226;</span> Processing
        </p>
        <p>
          <span className="dot can">&#8226;</span> Canceled
        </p>
      </div> */}
    </div>
  );
};

export default Featured;
