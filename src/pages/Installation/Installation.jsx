
import AppsFound from '../../components/AppsFound/AppsFound';
import { ArrowBigDown } from 'lucide-react';
import { useState } from 'react';

import { useLoaderData,} from 'react-router';

const Installation = () => {

const getLocalStored = () => {
    const stored = localStorage.getItem('apps');
    return stored ? JSON.parse(stored) : [];
}
const localAppIds = getLocalStored();
 const appData = useLoaderData();     
         
      
         const installedApps = appData.filter(app => localAppIds.includes(app.id));
        
      
const [sortType, setSortType] = useState("downloads-desc");

const sortedApps = [...installedApps].sort((a, b) => {


  if (sortType === "downloads-desc") {
    return b.downloads - a.downloads; 
  }
  else if (sortType === "downloads-asc") {
    return a.downloads - b.downloads;   
  }

  else if (sortType === "rating-desc") {
    return b.ratingAvg - a.ratingAvg;   
  }
  else if (sortType === "rating-asc") {
    return a.ratingAvg - b.ratingAvg;   
  }

  else {
    return 0;
  }
});



    return (
        <section className='py-5 md:py-20 max-w-7xl mx-auto'>
             <div className='text-center '>
                <h1 className='text-3xl md:text-5xl font-bold text-[#001931] mb-4'>Your Installed Apps</h1>
                <p className='text-[#627382] leading-8'>Explore All Trending Apps on the Market developed by us</p>
            </div>
                 <div className=' flex justify-between  mt-10 mb-4'>
                    <p className='font-medium text-[20px]'>({installedApps.length}) Apps Found</p>
                    <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Sort By Size <ArrowBigDown /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

<button className='text-gray-600 py-2 hover:bg-gray-100 mb-1' onClick={() => setSortType("downloads-desc")}>Downloads: High-Low</button>
<button className='text-gray-600 py-2 hover:bg-gray-100 mb-1' onClick={() => setSortType("downloads-asc")}>Downloads: Low-High</button>
<button className='text-gray-600 py-2 hover:bg-gray-100 mb-1' onClick={() => setSortType("rating-desc")}>Rating: High-Low</button>
<button className='text-gray-600 py-2 hover:bg-gray-100 mb-1' onClick={() => setSortType("rating-asc")}>Rating: Low-High</button>


  </ul>
</div>
                </div>
            {
         
                 sortedApps.map(app => <AppsFound key={app.id} app={app} />)


            }
        </section>
    );
};

export default Installation;