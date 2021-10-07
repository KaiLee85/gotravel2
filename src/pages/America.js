import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../component/modal";
import "../assets/sty_europe.css";
import dataAmeirca from "../component/america_imgData";
import Americacard from "../component/card_america";

function America() {
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
                <Link to="/Asia"> Asia</Link>
              </li>
            </ul>
          </div>
          <h2>America</h2>
        </div>
      </div>
      <main>
        <Americacard />
      </main>
    </div>
  );
}

export default America;
