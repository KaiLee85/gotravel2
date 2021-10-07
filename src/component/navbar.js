import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/navbarStyle.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            GO TRAVEL
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Log-in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Joinus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Join-us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
