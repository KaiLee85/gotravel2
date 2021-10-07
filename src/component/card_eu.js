import React, { useState } from "react";
import "../assets/image_eu/berlin_germany.jpg";
import dataEu from "./eu_imgData";
import Modal from "../component/modal";
import "../assets/card.css";

const Eucard = () => {
  const [modal, setModal] = useState(false);
  const [tempdata, setTempData] = useState([]);

  const [buttonPopup, setbuttonPopup] = useState(false);

  const getData = (img, title, desc) => {
    let tempData = [img, title, desc];
    setTempData((item) => [1, ...tempData]);
    return setModal(true);
  };

  return (
    <>
      <section className="cardWrapper">
        {dataEu.cardData.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="cardImg">
                <img src={item.imgSrc} className="card-img-top" />
                <div className="card-body">
                  {/* <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.desc}</p> */}
                  <button
                    className="infoBtn"
                    onClick={() => {
                      setbuttonPopup(true);
                      getData(item.imgSrc, item.title, item.desc);
                      console.log(item);
                    }}
                  >
                    More Information
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <Modal trigger={buttonPopup} setTrigger={setbuttonPopup}>
        <h4>Country : {tempdata[2]}</h4>
        <br />
        <h4>City : {tempdata[3]}</h4>
      </Modal>
    </>
  );
};

export default Eucard;
