import React from 'react';
import Carousel from '/app/Home/Carousel ';
import Video from './Video';
import News from './News';
import Tab from './Tab';
import Multimedia from '/app/Home/Multimedia'
function Page() {
  return (
    <div>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <Carousel />
      </div>

      <div data-aos="fade-down" data-aos-delay="200" data-aos-offset="200" data-aos-duration="1000">
        <Tab />
      </div>

      <div data-aos="fade-up" data-aos-delay="400" data-aos-offset="200" data-aos-duration="1000">
        <Video />
      </div>

      <div data-aos="fade-down" data-aos-delay="600" data-aos-offset="200" data-aos-duration="1000">
        <News />
      </div>
      <div data-aos="fade-up" data-aos-delay="600" data-aos-offset="200" data-aos-duration="1000">
        <Multimedia />
      </div>
    </div>
  );
}

export default Page;
