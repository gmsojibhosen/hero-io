import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
const AppsFound = ({app}) => {












    


    
         const {image, title,downloads,ratingAvg,size} = app;
        

const formatDownloads = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
  return num.toString();
};

    return (
        <div className='bg-white p-4 mb-5 flex items-center justify-between '>

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
            <div>
                 <button className=' mt-5 font-semibold text-[1.25rem] bg-[#00D390] rounded-sm text-white py-3 px-5'>Uninstall</button>
            </div>
        </div>
    );
};

export default AppsFound;


