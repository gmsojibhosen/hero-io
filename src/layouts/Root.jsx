import React from 'react';
import { ToastContainer} from 'react-toastify';

import { Outlet } from 'react-router';
import Footer from '../pages/Footer/Footer';
import Nabvar from '../components/Nabvar/Nabvar';
import PageLoading from '../PageLoading/PageLoading';

const Root = () => {
    return (
        <main className='bg-[#F5F5F5]'>
            <Nabvar/>
             <PageLoading />
            
            <Outlet />
            <Footer/>
            <ToastContainer />
        </main>
    );
};

export default Root;