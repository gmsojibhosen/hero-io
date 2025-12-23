
import {  useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import Charts from '../Charts/Charts';
const AppDetails = () => {

    const {id} = useParams()
    const appId = parseInt(id)
    const appsData = useLoaderData()
   
    const apps = appsData.find(a => a.id === appId)
   
    console.log(typeof apps)
   
  const {image, title,downloads,ratingAvg, companyName,size,reviews,ratings,description} = apps;

  const formatDownloads = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + ' B ';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + ' M ';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + ' K ';
  return num.toString();

 
};
   
    return (
        <section className='max-w-7xl mx-auto py-20'>
            <div className='flex items-center gap-10 border-b border-gray-300'>
              <div className='w-105 h-80 bg-white flex content-center'>
                <img src={image} alt="" className='' />
            </div>

            <div className='w-full py-6'>
              <div className='border-b border-gray-300  pb-6'><h1 className='text-[#001931] text-[2rem] font-bold mb-2'>{title}</h1>
              <p className='text-[#627382]'>Developed by : 
                <span className=' ml-1 font-medium bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p></div>

                <div className='flex gap-10 pt-5'>
                  <div className='flex-srt min-w-37.5'>
                    <img className='w-9 h-7 ' src={downloadIcon} />
                    <p className='my-2'>Downloads</p>
                    <h4 className='font-extrabold text-[40px]'>{ formatDownloads(downloads)}</h4>
                  </div>


                  <div className=' min-w-37.5'>
                    <img className='w-8 h-7 ' src={ratingIcon} />
                    <p className='my-2'>Average Ratings</p>
                    <h4 className='font-extrabold text-[40px]'>{ ratingAvg}</h4>
                  </div>


                  <div className=' min-w-37.5'>
                    <img className='w-8 h-7' src={reviewIcon} />
                    <p className='my-2'>Total Reviews</p>
                    <h4 className='font-extrabold text-[40px]'>{ formatDownloads(reviews)}</h4>
                  </div>
                  
                </div>
                <button className=' mt-5 font-semibold text-[1.25rem] bg-[#00D390] rounded-sm text-white py-3.5 px-5'>Install Now ({size} MB)</button>
            </div>
            </div>

            <div className="mt-10">
              <h2 className='font-bold text-[2rem] mb-2'>Rating</h2>
                <Charts ratings={ratings} />
              </div>

              <div className='pt-6 border-t border-gray-300 mt-6'>
              <h2 className='font-bold text-[2rem] mb-2'>Description</h2>
                <p className='text-[#627382] text-[1.25rem]'>{description}</p>
              </div>
        </section>
    );
};

export default AppDetails;