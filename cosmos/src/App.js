import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from './Login';
import UserInfo from './UserInfo'; // Refers to your input table
import CalendarView from "./CalendarView";
import GraphView from "./GraphView";

const App = () => {
  const [data, setData] = useState({
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  });

  return (
    <div>
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>
              About
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/login" style={styles.navLink}>
              Login
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/userInfo" style={styles.navLink}>
              User Info 
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userInfo" element={
          <div>
            <UserInfo data={data} setData={setData} />
            <CalendarView />
            <GraphView data={data} />
          </div>
        } />
      </Routes>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#9A90DF",
    padding: "10px 20px",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: 15,
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "flex-start",
    margin: "0",
    padding: "0",
  },
  navItem: {
    marginRight: "20px",
  },
  navLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    padding: "5px 10px",
    borderRadius: "5px",
    border: `2px solid #9A90DF`,
  },
};

export default App;
