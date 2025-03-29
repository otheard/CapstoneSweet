import React, { useState } from 'react';
import '../components/global.css'

import Bannervideo from '../assets/BannerVideo.mp4';
import BannerFood from '../assets/desserts back.jpg';

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className='bg-white pt-12 md:pt-24 min-h-[500px] flex items-center'>
      {/* Video Modal */}
      {showVideo && (
        <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
          <div className='bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative'>
            <button
              onClick={() => setShowVideo(false)}
              className='absolute -top-8 right-0 text-2xl'
            >
              &times;
            </button>
            <div className='aspect-video w-[800px] h-[450px]'>
              <iframe
                src={Bannervideo}
                width="100%"
                height="100%"
                allow="autoplay"
                allowFullScreen
                className='rounded-lg'
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className=' container mx-auto px-6 md:px-12 x1:px-20 flex flex-col lg:flex-row items-center justify-between gap-12'>
        {/* Left Section */}
        <div className=' w-full lg:flex-1 text-center lg:text-left'>
            <h3 className=' text-lg mt-5 md:text-xl lg:text-2xL font-bold font-roboto text-gray-800 mb-2 md;mb-4'>
                Welcome to the
            </h3>

            <h1 className=' text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-6xl font-pacifico animate-slide-up font-extrabold leading-tight mb-4'>
                Essence Dessert's<br />
                <span className=' text-red-600'>Bakery</span> with{" "}
                <br className=' hidden md:block'/>
                <span className=' text-pink-300'>Finest Ingredients!</span>

            </h1>
            <p className='text-sm md:text-base lg:text-lg text-gray-600 mb-6'>
                Sweet and Delicious{""}
                <br className='hidden sm:block' />
                with fast delivery.
            </p>
            <div className=' flex flex-wrap justify0center lg:justify-start gap-4'>
                <button className='bg-red-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-red-600 transition hover:scale-105 text-sm md:text-base'>
                    Get Started
                </button>
                <button className=' flex items-center gap-2 md:gap-3 group'
                onClick={() => setShowVideo((true))}>
                    <span className='w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center transition group-hover:bg-red-600 group-hover:scale-110 shadow-lg relative'>
                    <span className=' absolute inset-0 animate-ping rounded-full bg-red-400 opacity-75'>
                    </span>
                    <span className=' text-white text-lg'>&#9654;
                    </span>
                    <span className=' text-gray-600 group-hover:text-red-500 font-semibold text-sm md:text-base'>
                        Watch Video
                    </span>
                    </span> 
                </button>
            </div>
        </div>
            {/*Right section*/}
            <div className=' w-full lg:flex-1 relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto'>
                <div className=' relative mx-auto'>
                <img src={BannerFood} alt="Banner Picture" className=' w-full h-auto'/>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Banner;