"use client";
import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Full Size Image"
            className="w-[538px] h-[538px] object-cover"
          />
        </div>
      )}
      <div className="flex flex-row justify-start items-start space-x-4 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Preview ${index + 1}`}
            className="w-32 h-32 cursor-pointer hover:scale-110 transition ease-in-out duration-150"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
