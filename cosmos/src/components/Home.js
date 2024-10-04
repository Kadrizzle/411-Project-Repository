import React from "react";
import ChatBubble from "./ChatBubble";

const affirmations = [
  { text: "You are stronger than your cravings!", color: "#56135a" }, // Your first color
  { text: "Every step counts toward a healthier you!", color: "#9a90df" }, // Your second color
  { text: "You can do this! Believe in yourself!", color: "#e2a965" }, // Your third color
  { text: "Stay focused on your goals!", color: "#56135a" },
  { text: "Breathe deeply and stay calm.", color: "#9a90df" },
  { text: "One day at a time.", color: "#e2a965" },
  // Add more affirmations as needed
];

const Home = () => {
  return (
    <div class="home-container">
      <div class="spinning-logo">
        <img
          src="/logo512.png"
          alt="Spinning Logo"
          className="logo"
          style={{ width: "100%", maxWidth: "300px", animation: "spin 5s linear infinite", paddingBottom: "5px" }} // Adjust padding here
        />
      </div>
    </div>
  );
};

export default Home;
