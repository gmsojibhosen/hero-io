import React from 'react';
import playStore from '../../assets/play-store.png';
import appStore from '../../assets/app-store.png';
import hero from '../../assets/hero.png'
import { Link } from 'react-router';
const Banner = () => {
    return (
       <section className='px-3 md:px-0'>
         <div className='mb-10'>
            <div className='my-5 md:my-20'>
                <h1 className='font-bold text-4xl md:text-7xl text-center leading-10 md:leading-20'>We Build <br /><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive </span>Apps</h1>
            </div>

            <div className='md:flex items-center justify-center gap-4'>
                <Link to={'https://play.google.com/store/apps'}><div className='courser-pointer px-6 py-3 border border-[#D2D2D2] rounded-md flex justify-center items-center gap-2.5 mb-3 md:mb-0'>
                    <img src={playStore} alt="" />
                    <span className='font-semibold text-xl text-[#001931]'>Google Play</span>
                </div></Link>
                <Link to={'https://www.apple.com/app-store/'}>
                <div className='courser-pointer px-6 py-3 border border-[#D2D2D2] rounded-md flex justify-center items-center gap-2.5'>
                    <img src={appStore} alt="" />
                    <span className='font-semibold text-xl text-[#001931]'>App Store</span>
                </div>
                </Link>
            </div>
        </div>

        <div className=' w-full'>
            <img className='mx-auto' src={hero} alt="hero" />
        </div>

        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-5 md:p-20'>
            <h1 className='font-bold text-3xl md:text-5xl text-white text-center md:mb-10'>Trusted by Millions, Built for You</h1>
            <div className='md:flex items-center justify-center gap-5'>
                <div className='md:px-20 py-10 text-center'>
                <p className='text-gray-200 mb-1'>Total Downloads</p>
                <h2 className='text-white font-extrabold text-3xl md:text-[4rem]'>29.6M</h2>
                <p className='text-gray-200 mt-2'>21% more than last month</p>
            </div>

            <div className='md:px-20  py-10 text-center'>
                <p className='text-gray-200 mb-1'>Total Reviews</p>
                <h2 className='text-white font-extrabold text-3xl md:text-[4rem]'>906K</h2>
                <p className='text-gray-200 mt-2'>46% more than last month</p>
            </div>

            <div className='md:px-20  py-10 text-center'>
                <p className='text-gray-200 mb-1'>Active Apps</p>
                <h2 className='text-white font-extrabold text-3xl md:text-[4rem]'>132+</h2>
                <p className='text-gray-200 mt-2'>31 more will Launch</p>
            </div>
            </div>

        </div>
       </section>
    );
};

export default Banner;