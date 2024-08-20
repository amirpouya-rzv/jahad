"use client";

import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const ClientContent = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
};

export default ClientContent;
