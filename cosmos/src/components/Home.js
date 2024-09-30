import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <img src="/COSMOS-purple.png" alt="COSMOS Logo" className="logo" style={{ width: "40%", maxWidth: "400px" }} />
      <img src="/logo512.png" alt="Spinning Logo" className="logo" style={{ width: "30%", maxWidth: "300px", animation: "spin 5s linear infinite" }} />
      <p className="header-text">We strive to provide a safe, healthy, and positive environment for you to achieve your individual goals with vaping addiction!</p>
    </div>
  );
};

export default Home;
