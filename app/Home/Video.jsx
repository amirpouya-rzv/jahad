import React from 'react';

function Video() {
  return (
    <div className="flex justify-center my-4 px-4 mt-16 mb-32 h-[200px] rounded-2xl md:h-full">
      <video className="w-full max-w-4xl h-auto rounded-2xl" controls>
        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
