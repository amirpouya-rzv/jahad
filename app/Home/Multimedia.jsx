"use client";
import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Video() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const media = [
    { URL: "https://docs.material-tailwind.com/demo.mp4", description: "دریا وامواج" },
    { URL: "https://docs.material-tailwind.com/demo.mp4", description: "دریا " },
    { URL: "https://docs.material-tailwind.com/demo.mp4", description: " امواج" },
    { URL: "https://docs.material-tailwind.com/demo.mp4", description: "صخره وامواج" },
    { URL: "https://docs.material-tailwind.com/demo.mp4", description: " امواج خروشان" },
  ];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  return (
    <div className="relative flex flex-col items-center my-4 px-4 mt-16 mb-32 ">
      
      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
        چندرسانه ای
        <span className="block w-full border-b border-gray-500 mt-1"></span>
      </h1>

     
      <div className="relative w-full max-w-4xl overflow-hidden shadow-2xl border-2 rounded-2xl border-teal-800 mb-8">
        <div
          ref={containerRef}
          className="relative flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {media.map((item, index) => (
            <video
              key={index}
              ref={index === currentIndex ? videoRef : null}
              className="w-full h-[200px] md:h-[400px] object-cover flex-shrink-0"
              controls={false}
              poster="https://docs.material-tailwind.com/demo.jpg" 
              src={item.URL}
            >
              <source src={item.URL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>

        
        <div className="absolute inset-0 flex items-center justify-between px-4 py-2 bg-gradient-to-t from-black to-transparent">
          <button
            onClick={handlePrevious}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
          >
            <FaChevronLeft className="text-blue-500" />
          </button>
          <button
            onClick={handlePlayPause}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
          >
            {isPlaying ? (
              <FaPause className="text-red-500" />
            ) : (
              <FaPlay className="text-green-500" />
            )}
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
          >
            <FaChevronRight className="text-blue-500" />
          </button>
        </div>
      </div>

    
      <div className="text-center text-gray-600 text-base md:text-lg mt-4">
        {media[currentIndex].description}
      </div>
    </div>
  );
}

export default Video;
