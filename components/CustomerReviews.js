"use client";
// CustomerReviews.js
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

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
          <div
            key={index}
            className="p-4 rounded my-4 text-center text-black space-y-4"
          >
            <p className="text-2xl md:text-4xl italic">"{review.review}"</p>
            <Link
              href={`${review.link}`}
              className="mt-2 italic text-red-400 py-2"
            >
              {review.author}
            </Link>
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
