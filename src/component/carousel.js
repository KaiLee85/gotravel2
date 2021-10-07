import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function DemoCarousel() {
  return (
    <Carousel>
      <div>
        <img src="/image/img/slider1.jpg" />
        <p className="legend"></p>
      </div>
      <div>
        <img src="/image/img/slider2.jpg" />
        <p className="legend"></p>
      </div>
      <div>
        <img src="/image/img/slider3.jpg" />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
}

export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
