import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraphView = ({ data }) => {
  const [filter, setFilter] = useState("weekly");

  // Filter data based on the selected filter (weekly, monthly, yearly)
  const getFilteredData = () => {
    if (filter === "weekly") {
      return data.weekly; // Assumes data.weekly exists
    } else if (filter === "monthly") {
      return data.monthly; // Assumes data.monthly exists
    } else if (filter === "yearly") {
      return data.yearly; // Assumes data.yearly exists
    }
    return [];
  };

  const filteredData = getFilteredData();

  const chartData = {
    labels: Object.keys(filteredData),
    datasets: [
      {
        label: "Hits Per Day",
        data: Object.values(filteredData),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vape Hits Over Time",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("weekly")}>Weekly</button>
        <button onClick={() => setFilter("monthly")}>Monthly</button>
        <button onClick={() => setFilter("yearly")}>Yearly</button>
      </div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default GraphView;
