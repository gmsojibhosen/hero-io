import React, { useEffect, useState } from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import {getLocalStored, removeFromLoclaStore } from '../../localStore';
import { toast } from 'react-toastify';
import { Link } from 'react-router';
const AppsFound = ({app}) => {

    const {image, title,downloads,ratingAvg,size} = app;
    const appID = app.id;

const [isRemove, setIsRemove] = useState(false)
 
    useEffect(() => {
    const storedApps = getLocalStored();
    setIsRemove(!storedApps.includes(appID));
  }, [appID]);


   const handleRemoveLoclaStore = () => {
    const removeApp = removeFromLoclaStore(appID);
 if(removeApp) {
  setIsRemove(true);
  toast.success(`${title} Uninstall successfully!`);
  return true;

 }

 else {

  toast.warn(`${title} is already uninstalled!`);

 }
}

const formatDownloads = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
  return num.toString();
};
 
    return (
        <div className='bg-white p-4 mb-5 md:flex items-center justify-between '>

            <div className='flex justify-between items-center gap-4'>
                <div className='w-20 h-20 rounded-sm bg-[#f4efef]'>
                <img src={image} alt={title} />
            </div>
            <div>
                <h2 className='text-[1.25rem] font-medium mb-4'>{title}</h2>
                <div>
                    <div className='flex justify-between items-center ga-4'>
                        <div className='text-[#00D390]  px-4 py-1 font-medium flex items-center gap-1.5'>
                                <img className='w-4 h-3.5 ' src={download} />
                                <p>{formatDownloads(downloads)}</p>
                                    </div>
                            
                        <div className='text-[#00D390]  px-4 py-1 font-medium flex items-center gap-1.5'>
                        <img className='w-4 h-3.5 ' src={rating} />
                                    <p>{ratingAvg}</p>
                                            </div>
                                        <div>{size} MB</div>
                                                    </div>
                </div>
            </div>

            </div>
            
   <Link to={``}>
    <button
  onClick={handleRemoveLoclaStore} disabled={isRemove}
  className={` w-full md:w-auto mt-5 font-semibold text-[1.25rem] rounded-sm py-3.5 px-5 text-white 
  ${isRemove ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'}`}
>{isRemove ? 'Uninstalled' : 'Uninstall'}</button>
   </Link>
            </div>
       
    );
};

export default AppsFound;


