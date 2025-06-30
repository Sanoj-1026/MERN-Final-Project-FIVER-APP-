import React from "react";
import Slider from "react-slick"; // ✅ This was missing
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  const settings = {
    slidesToShow,
    slidesToScroll: arrowsScroll,
    infinite: true,
    dots: true,
    arrows: true,
  };

  return (
    <div className="flex justify-center py-[100px]">
      <div className="w-[1400px] relative">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
