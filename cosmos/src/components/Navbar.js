import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-collapse d-flex justify-content-between align-items-center">
          {" "}
          {/* Added justify-content-between */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <img src="/COSMOS-purple.png" alt="COSMOS Logo" className="navbar-logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
