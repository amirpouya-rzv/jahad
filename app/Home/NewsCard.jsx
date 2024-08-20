import React from 'react';

function NewsCard({ title, text, link, imageUrl }) {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <div
      className="relative flex flex-col rounded-xl overflow-hidden shadow-md bg-white border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="font-bold text-lg text-gray-800 mb-2 hover:text-blue-500 transition-colors">{title}</h2>
        <p className="text-gray-600  text-sm mb-2 flex-grow">{text}</p>
        <span className="text-blue-500 font-semibold hover:underline transition-colors">ادامه مطلب</span>
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity opacity-0 hover:opacity-30"></div>
    </div>
  );
}

export default NewsCard;
