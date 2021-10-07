import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../component/modal";
import "../assets/sty_europe.css";
import dataAsia from "../component/asian_imgData";
import Asiacard from "../component/card_asia";

function Asia() {
  const [buttonPopup, setbuttonPopup] = useState(false);

  return (
    <div>
      <div class="backImg">
        <div class="overlay">
          <div class="nav">
            <ul class="direction">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Europe"> Europe </Link>
              </li>
              <li>
                <Link to="/America"> America</Link>
              </li>
            </ul>
          </div>
          <h2>Asia</h2>
        </div>
      </div>
      <main>
        <Asiacard />
      </main>
    </div>
  );
}

export default Asia;
