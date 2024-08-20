"use client";

import { useEffect } from 'react';
import AOS from 'aos'; // وارد کردن AOS
import 'aos/dist/aos.css'; // وارد کردن استایل‌های AOS

const ClientContent = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدت زمان انیمیشن‌ها
      once: false, // تنظیم به false برای اجرای انیمیشن‌ها هر بار که عنصر به صفحه می‌آید
    });

    // بازنشانی انیمیشن‌های AOS به صورت دستی
    const handleScroll = () => {
      AOS.refresh(); // بازنشانی AOS برای ریست انیمیشن‌ها
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
};

export default ClientContent;
