import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import OurTech from "./OurTech";
import UserInfo from "./UserInfo";
import CalendarView from "./CalendarView";
import GraphView from "./GraphView";

const Navbar = () => {
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
    <>
      <nav className="navbar">
        <img src="/COSMOS-purple.png" alt="COSMOS Logo" className="navbar-logo" />
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login/Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/userInfo">
              User Info
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/OurTech">
              Our Technology
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/OurTech" element={<OurTech />} />
        <Route
          path="/userInfo"
          element={
            <div>
              <UserInfo data={data} setData={setData} />
              <CalendarView />
              <GraphView data={data} />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default Navbar;
