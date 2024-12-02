import "./UserInfo.css";
import React from "react";
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

const UserInfo = () => {
  const data = {
    weekly: {
      Monday: 10,
      Tuesday: 8,
      Wednesday: 15,
      Thursday: 12,
      Friday: 5,
      Saturday: 0,
      Sunday: 1,
    },
    monthly: {
      Week1: 52,
      Week2: 48,
      Week3: 63,
      Week4: 58,
    },
    yearly: {
      January: 410,
      February: 405,
      March: 350,
      April: 324,
      May: 403,
      June: 328,
      July: 312,
      August: 344,
      September: 309,
      October: 286,
      November: 238,
      December: 221,
    },
  };

  const chartOptions = (title, axisNumberColor, chartBorderColor, legendFontSize, legendTextColor, titleColor) => ({
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: legendFontSize, // Set the font size for the legend
          },
          color: legendTextColor,
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 26,
        },
        color: titleColor,
      },
    },
    scales: {
      x: {
        ticks: {
          color: axisNumberColor, // Custom color for x-axis numbers
        },
        grid: {
          borderColor: chartBorderColor, // Custom color for x-axis grid border
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: axisNumberColor, // Custom color for y-axis numbers
        },
        grid: {
          borderColor: chartBorderColor, // Custom color for y-axis grid border
        },
      },
    },
    elements: {
      bar: {
        borderColor: chartBorderColor, // Border color of the chart
        borderWidth: 2, // Set border width if needed
      },
    },
  });
  

  const createChartData = (labels, dataValues, label, backgroundColor, chartBorderColor) => ({
    labels,
    datasets: [
      {
        label,
        data: dataValues,
        backgroundColor,
        borderColor: chartBorderColor,
        borderWidth: 2,
      },
    ],
  });

  // Weekly chart data with unique colors
  const weeklyData = createChartData(
    Object.keys(data.weekly),
    Object.values(data.weekly),
    "Hits Per Day",
    "#db324d", // Weekly chart background color
    "#ddf8e3"  // Weekly chart border color
  );

  // Monthly chart data with unique colors
  const monthlyData = createChartData(
    Object.keys(data.monthly),
    Object.values(data.monthly),
    "Total Hits During the Week",
    "#0075f2", // Monthly chart background color
    "#ffffff"  // Monthly chart border color
  );

  // Yearly chart data with unique colors
  const yearlyData = createChartData(
    Object.keys(data.yearly),
    Object.values(data.yearly),
    "Total Hits During the Month",
    "#4b6858", // Yearly chart background color
    "#d9d9d9"  // Yearly chart border color
  );

  return (
    <div>
      <h1 className="topHeader">Welcome, Kade!</h1>
      <h2 className="subHeader">Here is your vape data</h2>
      <section className="sectionOne">
        <div style={{ marginBottom: "70px", maxWidth: "700px", margin: "0 auto" }}>
          <h2 className="headingOne">Weekly Data</h2>
          <Bar data={weeklyData} options={chartOptions("Weekly Vape Hits", "#ffffff", "#db324d", 18, "white", "white")} />
        </div>
      </section>

      <section className="sectionTwo">
        <div style={{ marginBottom: "70px", maxWidth: "700px", margin: "0 auto" }}>
          <h2 className="headingTwo">Monthly Data</h2>
          <Bar data={monthlyData} options={chartOptions("Monthly Vape Hits", "#ffffff", "#0075f2", 18, "white", "white")} />
        </div>
      </section>

      <section className="sectionThree">
        <div style={{ marginBottom: "70px", maxWidth: "700px", margin: "0 auto" }}>
          <h2 className="headingThree">Yearly Data</h2>
          <Bar data={yearlyData} options={chartOptions("Yearly Vape Hits", "#ffffff", "#4b6858", 18, "white", "white")} />
        </div>
      </section>
    </div>
  );
};

export default UserInfo;
