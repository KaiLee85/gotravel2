import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../assets/sty_home.css";
import DemoCarousel from "../component/carousel";

import Navbar from "../component/navbar";
function Home() {
  const [active, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div>
      <Navbar />

      {/* <nav className="navbar">
        <i
          onClick={handleToggle}
          className={`fas fa-bars hamburger ${
            active ? "toggleMenu-active" : ""
          }`}
        ></i>
        <div className="toggleMenu">
          <ul>
            <li className="logIn">
              <NavLink to="/Login">Log-In</NavLink>
            </li>
            <li className="myList">
              <NavLink to="/#"> My List</NavLink>
            </li>
            <li className="posting">
              <NavLink to="/Gallery"> Post My Tri</NavLink>
            </li>
            <li className="singIn">
              <NavLink to="/Joinus" activeStyle>
                {" "}
                Sing-In
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link className="title" to="/">
            Go Travel
          </Link>
        </div>

        <i className="fas fa-search"></i>
      </nav> */}
      <DemoCarousel />
      {/* <div className="container">
        <i className="fas fa-chevron-left leftBtn" id="prevBtn"></i>
        <i className="fas fa-chevron-right rightBtn" id="nextBtn"></i> */}

      {/* <div className="slider-container">
          <div className="slide">
            <img src="/image/img/slider3.jpg" id="lastClone" alt="" />

            <img src="/image/img/slider1.jpg" alt="" />

            <img src="/image/img/slider2.jpg" alt="" />

            <img src="/image/img/slider3.jpg" alt="" />

            <img src="/image/img/slider1.jpg" id="firstClone" alt="" />
          </div>
        </div> */}
      {/* </div> */}

      <div className="pointdirecWarp">
        <div className="pointDir">
          <Link to="Asia">
            <div className="asia">Asia / East Asia</div>
          </Link>
          <Link to="/America">
            <div className="america">
              America / South America
              <br />
            </div>
          </Link>
          <Link to="/Europe">
            <div className="europe">Europe</div>
          </Link>
        </div>
      </div>
      <footer>
        <div className="made">
          <h5>Made by Sujin Lee. 2021</h5>
        </div>
      </footer>
    </div>
  );
}

export default Home;
