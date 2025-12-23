import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AllApps from '../AllApps/AllApps';

const Trending = () => {

    const apps = useLoaderData()
    return (
        <section className='pt-20 pb-20 max-w-7xl mx-auto'>
            <div className='mb-10'>
                <h1 className='font-bold text-5xl text-[#001931] text-center mb-4'>Trending Apps</h1>
                <p className='text-[1.25rem] text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid grid-cols-4  gap-4'>
                {
                    apps.slice(0, 12).map(app => <AllApps key={app.id} app = {app}></AllApps>)
                }
            </div>

        <div className='text-center mt-10'>
        <Link hrefLang='blank' to={'/apps'} className=" cursor-pointer px-10 py-3 rounded-sm font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"> Show All</Link>
        </div>
       
        </section>
    );
};

export default Trending;