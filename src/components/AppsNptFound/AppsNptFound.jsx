import React from 'react';
import appError from '../../assets/App-Error.png'
import { Link } from 'react-router';
const AppsNptFound = () => {
    return (
        <div className='text-center'>
            <img   className=' mx-auto mt-10' src={appError} alt="" />
            <h1 className='font-semibold text-5xl  mt-7'>OPPS!! APP NOT FOUND</h1>
            <p className='text-gray-500  mt-3 mb-5'>The App you are requesting is not found on our system.  please try another apps</p>

            <Link  to={'/'} className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back!</Link>
       </div>
    );
};

export default AppsNptFound;