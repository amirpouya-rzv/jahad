'use client';

import React, { useState } from 'react';

const tabs = [
  {
    id: 1,
    title: "شروع ثبت نام کلاس های ترم دوم تابستان",
    subtitle: "مركز آموزش كامپيوتر سازمان جهاد دانشگاهي تهران",
    content: "با بيش از 30 سال سابقه در برگزاري دوره هاي آموزشي در خصوص فناوري اطلاعات، يكي از اولين و برترین مراكز آموزشي كشور با بهره گیری از اساتید مجرب مي باشد كه از ابتداي شروع به كار تاكنون هزاران نفر از خدمات آموزشي آن استفاده نموده اند.",
    link: "/"
  },
  {
    id: 2,
    title: " رزرو دوره‌های مرکز آموزش هنر و دیجیتال",
    subtitle: "دوره‌های آموزشی کوتاه‌مدت کاربردی",
    content: "مرکز هنر معاونت آموزشی سازمان جهاد دانشگاهی تهران، دوره‌های آموزشی کوتاه‌مدت کاربردی برای گروه‌های مختلف هنری را به‌صورت عملی و کارگاهی در ترم تابستان ۱۴۰۳ برای هنرجویان علاقه‌مند برگزار می‌کند.",
    link: "/"
  },
  {
    id: 3,
    title: "آموزش های عمومی و تخصصی کامپیوتر",
    subtitle: "دوره‌های تخصصی کامپیوتر",
    content: "مركز آموزش فناوري اطلاعات سازمان جهاد دانشگاهي تهران با بيش از 30 سال سابقه در برگزاري دوره هاي آموزشي در خصوص كامپيوتر، يكي از اولين و برترین مراكز آموزشي كشور با بهره گیری از اساتید مجرب مي باشد كه از ابتداي شروع به كار تاكنون هزاران نفر از خدمات آموزشي آن استفاده نموده اند.",
    link: "/"
  },
  {
    id: 4,
    title: "برگزاری دوره های تخصصی حسابداری",
    subtitle: "دوره‌های تخصصی حسابداری و مدیریت",
    content: "مركز آموزش تخصصی سازمان جهاد دانشگاهي تهران با بيش از 30 سال سابقه در برگزاري دوره هاي آموزشي تخصصی در خصوص حسابداری و مدیریت ، يكي از اولين و برترین مراكز آموزشي كشور با بهره گیری از اساتید مجرب مي باشد كه از ابتداي شروع به كار تاكنون هزاران نفر از خدمات آموزشي آن استفاده نموده اند.",
    link: "/"
  },
];

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
     
    <div className="w-[350px] md:w-full max-w-4xl mx-auto mt-16 mb-32">
      
      {/* Tabs Header */}
      <div className="text-sm font-medium text-gray-700 border-b border-rose-500 rounded-2xl bg-gray-100">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map(tab => (
            <li key={tab.id} className="flex-1">
              <button
                className={`inline-block py-3 px-4 text-center font-medium transition-colors duration-300 ease-in-out ${
                  activeTab === tab.id
                    ? 'text-black border-b-2 border-rose-500 bg-white'
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab(tab.id)}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Tabs Content */}
      <div className="relative p-6 bg-white border border-rose-500 rounded-lg shadow-md mt-2">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`transition-opacity duration-700 ease-in-out transform ${
              activeTab === tab.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 ">{tab.title}</h2>
            <h3 className="text-lg font-medium text-gray-600 mt-2">{tab.subtitle}</h3>
            <p className="text-base font-light text-gray-600 mt-4 leading-relaxed">{tab.content}</p>
            <a
              href={tab.link}
              className="mt-6 inline-block px-5 py-2 text-base font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-300 ease-in-out"
            >
              بیشتر بخوانید
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
