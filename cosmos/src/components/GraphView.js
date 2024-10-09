import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraphView = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!data || !data.labels || !data.values) return; // Prevents errors if data is undefined

    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line", // You can change the chart type as needed
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Sample Data", // Change this label as needed
            data: data.values,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy(); // Cleanup chart on component unmount
    };
  }, [data]);

  return (
    <div>
      <h2>Graph View</h2>
      {data && data.labels && data.values ? <canvas ref={canvasRef} /> : <p>No data available to display the graph.</p>}
    </div>
  );
};

// Default props to prevent errors
GraphView.defaultProps = {
  data: {
    labels: [],
    values: [],
  },
};

export default GraphView;
