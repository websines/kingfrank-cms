"use client";
// CustomerReviews.js
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CustomerReviews = ({ reviews }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-row w-full my-8">
      <div
        className="translate-y-1/2 left-0 cursor-pointer bg-none p-2 rounded-full"
        onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
      >
        <FaAngleLeft className="w-6 h-6" />
      </div>
      <Slider {...settings} ref={sliderRef} className="w-[80%] mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 rounded my-2 text-center">
            <p className="text-3xl md:text-6xl">{review.review}</p>
            <p className="mt-2 italic">{review.author}</p>
          </div>
        ))}
      </Slider>
      <div
        className="translate-y-1/2 right-0 cursor-pointer bg-none p-2 rounded-full"
        onClick={() => sliderRef.current && sliderRef.current.slickNext()}
      >
        <FaAngleRight className="w-6 h-6" />
      </div>
    </div>
  );
};

export default CustomerReviews;
