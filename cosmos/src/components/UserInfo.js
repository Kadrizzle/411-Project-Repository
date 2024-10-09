import React from "react";
import { Calendar } from "react-calendar";
import GraphView from "../components/GraphView"; // Updated to use the correct component name

const UserInfo = () => {
  return (
    <div className="user-info-container">
      <div className="login-box">
        <h2>User Calendar</h2>
        <Calendar />
      </div>
      <div className="login-box">
        <h2>User Graph</h2>
        <GraphView />
      </div>
    </div>
  );
};

export default UserInfo;
