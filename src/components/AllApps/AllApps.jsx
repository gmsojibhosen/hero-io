import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { Link } from 'react-router';


const AllApps = ({app}) => {
    const {id, image, title,downloads,ratingAvg} = app;

const formatDownloads = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + ' B ';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + ' M ';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + ' K ';
  return num.toString();
};
    return (
       <div className='block'>
        <Link to={`/appDetails/${id}`}>

         <div className='bg-white p-4 shadow hover:shadow-lg transition-shadow duration-300'>
                    <div className='bg-[#D9D9D9] mb-4 rounded-md'>
                        <img className='w-full h-40 md:h-69' src={image}  alt={title}/>
                        </div>
                        <h5 className='text-center font-medium text-lg md:text-[1.25rem] text-[#001931] mb-2 md:mb-4'>{title}</h5>
                        <div>
                            <div className='md:flex justify-between items-center'>
                            <div className='mb-3 md:mb-0 text-[#00D390] bg-[#F1F5E8] text-center rounded-s px-4 py-1 font-medium flex items-center justify-center gap-1.5'>
                                <img className='w-4 h-3.5 ' src={download} />
                                <p>{formatDownloads(downloads)}</p>
                                </div>
        
                            <div className='text-[#00D390] bg-[#F1F5E8] rounded-s px-4 py-1 font-medium flex items-center justify-center gap-1.5'>
                                <img className='w-4 h-3.5 ' src={rating} />
                                <p>{ratingAvg}</p>
                                </div>
                                </div>
                        </div>
                </div>
                </Link>
       </div>
        
    );
};

export default AllApps;