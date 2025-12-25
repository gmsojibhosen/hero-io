import React, { useState,} from 'react';
import { useLoaderData } from 'react-router';
import AllApps from '../../components/AllApps/AllApps';
import AppsNptFound from '../../components/AppsNptFound/AppsNptFound';

const Apps = () => {
  const apps = useLoaderData();
    const [search, setSearch] = useState('');
    const filterApp = apps.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));

  
  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }
    return (
        <section className='py-5 md:py-20 max-w-7xl mx-auto p-3'>
            <div className='text-center '>
                <h1 className='text-3xl md:text-5xl font-bold text-[#001931] mb-4'>Our All Applications</h1>
                <p className='text-[#627382] leading-8'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            
                <div className=' md:flex justify-between  mt-10 mb-4'>
                    <p className='font-semibold text-xl md:text-2xl mb-3 md:mb-0'>({apps.length}) Apps Found</p>
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

            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4'>
                  {filterApp.length > 0 ? (
          filterApp.map(app => <AllApps key={app.id} app={app} />)
        ) : (
          <div className='col-span-4'>
          <AppsNptFound></AppsNptFound>
        </div>
        )}
            </div>
        </section>
    );
};

export default Apps;