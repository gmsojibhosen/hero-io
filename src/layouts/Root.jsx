import React from 'react';
import { ToastContainer} from 'react-toastify';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer/Footer';
import Nabvar from '../components/Nabvar/Nabvar';

const Root = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <Nabvar/>
            <Outlet />
            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default Root;