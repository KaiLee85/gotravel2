import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../component/modal";
import "../assets/sty_europe.css";
import PhotoEu from "../component/card_eu.js";
import dataEu from "../component/eu_imgData";
import Eucard from "../component/card_eu";

function Europe() {
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
                <Link to="/Asia"> Asia </Link>
              </li>
              <li>
                <Link to="/America"> America</Link>
              </li>
            </ul>
          </div>
          <h2>Europe</h2>
        </div>
      </div>
      <main>
        <Eucard />
      </main>
    </div>
  );
}
{
  /* popup test */
}
{
  /* <Modal trigger={buttonPopup} setTrigger={setbuttonPopup}>
        <h3>Hellooooo</h3>
        {dataEu.cardData.map((item, index) => (
          <h3 key={index}>{item.id}</h3>
        ))}
      </Modal> */
}

export default Europe;

// {hard cording img
/* <div class="imgCon">
        <div class="imgs">
          <img src="/image/img_europe/berlin_germany.jpg" alt="" />
          <i class="fas fa-info-circle fa-2x moreInfo"></i>
        </div>

        <div class="imgs">
          <img src="/image/img_europe/dubrovnik_croatia.jpg" alt="" />
          <i class="fas fa-info-circle fa-2x moreInfo"></i>
        </div>
        <div class="imgs">
          <img src="/image/img_europe/france_paris.jpg" alt="" />
          <i class="fas fa-info-circle fa-2x moreInfo"></i>
        </div>

        <div class="imgs">
          <img src="/image/img_europe/lauterbrunnen_switzerland.jpg" alt="" />
          <i class="fas fa-info-circle fa-2x moreInfo"></i>
        </div>

        <div class="imgs">
          <img src="/image/img_europe/manarola,italy.jpg" alt="" />
          <i class="fas fa-info-circle fa-2x moreInfo"></i>
        </div>

        <div class="imgs">
          <img src="/image/img_europe/neuschwanstein_germany.jpg" alt="" />
          <i class="fas fa-info-circle fa-2x moreInfo"></i>
        </div>

        <div class="imgs">
          <img src="/image/img_europe/oia_greece.jpg" alt="" />
          <i class="fas fa-info-circle fa-2x moreInfo"></i>
        </div>

        <div class="imgs">
          <img src="/image/img_europe/venice_itlay.jpg" alt="" />
          <i
            class="fas fa-info-circle fa-2x moreInfo"
            onClick={() => {
              setOpenModal(true);
            }}
          ></i>
          {openModal && <Modal closeModal={setOpenModal} />} */

{
  /* </div>
      </div> */
}
