
import AppsFound from '../../components/AppsFound/AppsFound';
import { ArrowBigDown } from 'lucide-react';

import { useLoaderData,} from 'react-router';

const Installation = () => {

const getLocalStored = () => {
    const stored = localStorage.getItem('apps');
    return stored ? JSON.parse(stored) : [];
}
const localAppIds = getLocalStored();
 const appData = useLoaderData();     
         
      
         const installedApps = appData.filter(app => localAppIds.includes(app.id));
        
       





    return (
        <section className='py-20 max-w-7xl mx-auto'>
             <div className='text-center '>
                <h1 className='text-5xl font-bold text-[#001931] mb-4'>Your Installed Apps</h1>
                <p className='text-[#627382] leading-8'>Explore All Trending Apps on the Market developed by us</p>
            </div>
                 <div className=' flex justify-between  mt-10 mb-4'>
                    <p className='font-medium text-[20px]'>({installedApps.length}) Apps Found</p>
                    <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Sort By Size <ArrowBigDown /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
                </div>
            {
        
         
     
                 installedApps.map(app => <AppsFound key={app.id} app={app}></AppsFound>)

            }
        </section>
    );
};

export default Installation;