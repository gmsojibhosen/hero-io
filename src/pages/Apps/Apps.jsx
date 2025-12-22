import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AllApps from '../../components/AllApps/AllApps';
import { toast} from 'react-toastify';

const Apps = () => {
  const apps = useLoaderData();
    const [search, setSearch] = useState('');
    const filterApp = apps.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));

   useEffect(() => {
    if (search && filterApp.length === 0) {
       toast("Apps Not Found!")
    }
  }, [search, filterApp.length]);

  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }
    return (
        <section className='py-20 max-w-7xl mx-auto'>
            <div className='text-center '>
                <h1 className='text-5xl font-bold text-[#001931] mb-4'>Our All Applications</h1>
                <p className='text-[#627382] leading-8'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            
                <div className=' flex justify-between  mt-10 mb-4'>
                    <p className='font-semibold text-2xl'>({apps.length}) Apps Found</p>
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
  <input type="search" onChange={handleOnChange} required placeholder="Search"  value={search} className='focus:border-0'/>
</label>
                </div>

            <div className='grid grid-cols-4  gap-4'>
                  {
                    filterApp.map(app => <AllApps key={app.id} app = {app}></AllApps>)
                  }
            </div>
        </section>
    );
};

export default Apps;