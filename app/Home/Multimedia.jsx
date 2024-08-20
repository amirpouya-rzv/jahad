"use client";
import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Video() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [prevIndex, setPrevIndex] = useState(null);

  const media = [
    { URL: "https://docs.material-tailwind.com/demo.mp4", description: "دریا وامواج" },
    { URL: "https://docs.material-tailwind.com/demo.mp4", description: "دریا " },
    { URL: "https://docs.material-tailwind.com/demo.mp4", description: " امواج" },
    { URL: "https://docs.material-tailwind.com/demo.mp4", description: "صخره وامواج" },
    { URL: "https://docs.material-tailwind.com/demo.mp4", description: " امواج خروشان" },
  ];

  useEffect(() => {
    if (prevIndex !== null) {
      // Set a short timeout to ensure the new video is rendered before applying the transition
      setTimeout(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
          videoElement.classList.add('transition-transform', 'duration-700', 'ease-in-out');
          videoElement.classList.add(currentIndex > prevIndex ? 'translate-x-[-100%]' : 'translate-x-[100%]');
          setTimeout(() => {
            videoElement.classList.remove('transition-transform', 'duration-700', 'ease-in-out');
            videoElement.classList.remove('translate-x-[-100%]', 'translate-x-[100%]');
          }, 700); // Duration should match the CSS transition duration
        }
      }, 10);
    }
    setPrevIndex(currentIndex);
  }, [currentIndex]);

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
    <div className="relative flex flex-col items-center my-4 px-4 mt-16 mb-32">
      {/* Title */}
      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 relative mb-6">
        چندرسانه ای
        <span className="block w-full border-b border-gray-500 mt-1"></span>
      </h1>

      {/* Video container */}
      <div className="relative w-full   max-w-full md:max-w-4xl h-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 mb-8">
        <video
          ref={videoRef}
          className="w-full h-[200px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out"
          controls={false}
          poster="https://docs.material-tailwind.com/demo.jpg" // Thumbnail image
          src={media[currentIndex].URL}
        >
          <source src={media[currentIndex].URL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom controls */}
        <div className="absolute inset-0 flex items-center justify-between px-2 py-2 md:px-4 md:py-4">
          <button
            onClick={handlePrevious}
            className="p-2 md:p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
          >
            <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
          </button>
          <button
            onClick={handlePlayPause}
            className="p-2 md:p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
          >
            {isPlaying ? (
              <FaPause className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
            ) : (
              <FaPlay className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
            )}
          </button>
          <button
            onClick={handleNext}
            className="p-2 md:p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
          >
            <FaChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
          </button>
        </div>
      </div>

      {/* Video Description */}
      <div className="text-center text-gray-600 text-base md:text-lg">
        {media[currentIndex].description}
      </div>
    </div>
  );
}

export default Video;
