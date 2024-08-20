"use client";
import React, { useState, useEffect } from 'react';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
import Link from 'next/link';

function Page() {
    const [slides, setSlides] = useState([
        { url: 'https://jtit.ir/media/posts-pics/04_uSIkEJB.jpg' },
        { url: 'https://jtit.ir/media/posts-pics/06_iptdM6u.jpg' },
        { url: 'https://jtit.ir/media/posts-pics/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87_%DA%A9%D9%84%DB%8C.jpg' },
        { url: 'https://jtlc.ir/media/posts-pics/%D9%BE%D8%A7%DB%8C%DB%8C%D8%B2.jpg' },
        { url: 'https://mctc.ir/media/posts-pics/201.jpg' },
        { url: 'https://jtlc.ir/media/posts-pics/Preparation-for-CAE-tests_4.jpg' }
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const gotoSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Auto play effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentIndex]);

    return (
        <div className='relative w-full max-w-full overflow-hidden mt-20'>
            {slides.length > 0 && (
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-[300px] md:h-[700px] bg-center bg-cover duration-500'
                ></div>
            )}

            {/* Left arrow */}
            <div
                onClick={prevSlide}
                className='absolute top-[50%]  -translate-y-1/2 left-2 md:left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition duration-300'
            >
                <GoChevronLeft size={30} />
            </div>

            {/* Right arrow */}
            <div
                onClick={nextSlide}
                className='absolute top-[50%] -translate-y-1/2 right-2 md:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition duration-300'
            >
                <GoChevronRight size={30} />
            </div>

            {/* Indicators */}
            <div className='flex justify-center py-2 absolute bottom-2 left-0 right-0'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => gotoSlide(slideIndex)}
                        className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? "text-indigo-600" : "text-gray-400"}`}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
