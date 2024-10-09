import React from "react";

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
