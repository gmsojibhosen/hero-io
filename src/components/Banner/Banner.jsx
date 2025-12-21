import React from 'react';
import playStore from '../../assets/play-store.png';
import appStore from '../../assets/app-store.png';
import hero from '../../assets/hero.png'
const Banner = () => {
    return (
       <div>
         <div className='mb-10'>
            <div className='my-5 md:my-20'>
                <h1 className='font-bold text-7xl text-center leading-20'>We Build <br /><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive </span>Apps</h1>
            </div>

            <div className='flex items-center justify-center gap-4'>
                <div className='px-6 py-3 border border-[#D2D2D2] rounded-md flex items-center gap-2.5'>
                    <img src={playStore} alt="" />
                    <span className='font-semibold text-xl text-[#001931]'>Google Play</span>
                </div>
                <div className='px-6 py-3 border border-[#D2D2D2] rounded-md flex items-center gap-2.5'>
                    <img src={appStore} alt="" />
                    <span className='font-semibold text-xl text-[#001931]'>App Store</span>
                </div>
            </div>
        </div>

        <div className=' w-full'>
            <img className='mx-auto' src={hero} alt="hero" />
        </div>
       </div>
    );
};

export default Banner;