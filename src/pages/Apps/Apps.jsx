import React from 'react';

const Apps = () => {
    return (
        <section className='py-20 max-w-7xl mx-auto'>
            <div className='text-center '>
                <h1 className='text-5xl font-bold text-[#001931] mb-4'>Our All Applications</h1>
                <p className='text-[#627382] leading-8'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            
                <div className=' flex justify-between  mt-10'>
                    <p className='font-semibold text-2xl'>(132) Apps Found</p>
                    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
                </div>
            
        </section>
    );
};

export default Apps;