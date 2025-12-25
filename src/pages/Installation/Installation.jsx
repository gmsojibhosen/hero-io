
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
        
      
const [sortType, setSortType] = useState("name");

const sortedApps = [...installedApps].sort((a, b) => {
  if (sortType === "name") {
    return a.title.localeCompare(b.title);
  }
  if (sortType === "downloads") {
    return b.downloads - a.downloads;
  }
  if (sortType === "rating") {
    return b.ratingAvg - a.ratingAvg;
  }
});





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
<button className='mb-2 hover:bg-gray-200 p-2' onClick={() => setSortType("name")}>Name</button>
<button className='mb-2 hover:bg-gray-200 py-2' onClick={() => setSortType("downloads")}>Downloads</button>
<button className='mb-2 hover:bg-gray-200 py-2' onClick={() => setSortType("rating")}>Rating</button>

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