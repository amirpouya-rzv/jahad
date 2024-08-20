"use client"
import React from 'react';
import NewsCard from './NewsCard'; // Import the NewsCard component

const news = [
  {
    id: 1,
    title: "شروع ثبت نام ترم دوم تابستان مرکز کامپیوتر جهاد دانشگاهی تهران",
    text: "مركز آموزش كامپيوتر سازمان جهاد دانشگاهي تهران با بيش از 30 سال سابقه در برگزاري دوره هاي آموزشي در خصوص فناوري اطلاعات، يكي از اولين و برترین مراكز آموزشي كشور با بهره گیری از اساتید مجرب مي باشد كه از ابتداي شروع به كار تاكنون هزاران نفر از خدمات آموزشي آن استفاده نموده اند.",
    link: "/",
    imageUrl: "https://jtehran.com/media/posts-pics/%DA%A9%D9%84%DB%8C%DA%A9_MLyhlxU.jpg"
  },
  {
    id: 2,
    title: "رزررو دوره‌های مرکز آموزش هنر",
    text: "مرکز هنر معاونت آموزشی سازمان جهاد دانشگاهی تهران، دوره‌های آموزشی کوتاه‌مدت کاربردی برای گروه‌های مختلف هنری را به‌صورت عملی و کارگاهی در ترم تابستان ۱۴۰۳ برای هنرجویان علاقه‌مند برگزار می‌کند.",
    link: "/",
    imageUrl: "https://jtehran.com/media/posts-pics/%D9%87%D9%86%D8%B1_UrmL7eD_8vrZ0PV_vYLfkni.jpg"
  },
  {
    id: 3,
    title: "آموزش های عمومی و تخصصی کامپیوتر",
    text: "مركز آموزش فناوري اطلاعات سازمان جهاد دانشگاهي تهران با بيش از 30 سال سابقه در برگزاري دوره هاي آموزشي در خصوص كامپيوتر، يكي از اولين و برترین مراكز آموزشي كشور با بهره گیری از اساتید مجرب مي باشد كه از ابتداي شروع به كار تاكنون هزاران نفر از خدمات آموزشي آن استفاده نموده اند.",
    link: "/",
    imageUrl: "https://jtehran.com/media/posts-pics/mehr-comp_WBpYD02.jpg"
  },
  {
    id: 4,
    title: "برگزاری دوره های تخصصی حسابداری",
    text: "مركز آموزش تخصصی سازمان جهاد دانشگاهي تهران با بيش از 30 سال سابقه در برگزاري دوره هاي آموزشي تخصصی در خصوص حسابداری و مدیریت ، يكي از اولين و برترین مراكز آموزشي كشور با بهره گیری از اساتید مجرب مي باشد كه از ابتداي شروع به كار تاكنون هزاران نفر از خدمات آموزشي آن استفاده نموده اند.",
    link: "/",
    imageUrl: "https://jtehran.com/media/posts-pics/r54_Bo9POlj.jpg"
  },
];

function CardList() {
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl mt-16 mb-32 ">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div
          className='text-blue-600 hover:underline text-lg cursor-pointer '
          onClick={() => window.location.href = '/'}
        >
          ...نتایج بیشتر
        </div>
        <h1 className='relative font-extrabold text-3xl md:text-4xl text-gray-800'>اخبار</h1>
      </div>
      <hr className="mb-8 border-gray-300 " />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-right">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            text={item.text}
            link={item.link}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
