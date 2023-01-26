import React, { useState } from "react";

import "./Slider.scss";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  const nextSlide = () =>
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);

  const data = [
    "https://images.unsplash.com/photo-1595535373192-fc8935bacd89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1588514912908-8f5891714f8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: ` translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="slider-img" />
        <img src={data[1]} alt="slider-img" />
        <img src={data[2]} alt="slider-img" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <span className="material-icons">west</span>
        </div>
        <div className="icon" onClick={nextSlide}>
          <span className="material-icons">east</span>
        </div>
      </div>
    </div>
  );
}

export default Slider;
