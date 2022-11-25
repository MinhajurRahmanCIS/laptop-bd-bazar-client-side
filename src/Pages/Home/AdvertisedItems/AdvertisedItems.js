import React from 'react';
import a1 from '../../../asset/advertise/a1.jpeg'
import a2 from '../../../asset/advertise/a2.jpeg'
import a3 from '../../../asset/advertise/a3.jpeg'
const AdvertisedItems = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-24 mt-5'>
            <div className="card w-fit image-full">
                <figure><img src={a1} alt="Ad" /></figure>
                <div className="card-body">
                    <h2 className="card-title mt-28"> New Collection</h2>
                    
                </div>
            </div>
            <div className="card w-fit image-full">
                <figure><img src={a2} alt="Ad" /></figure>
                <div className="card-body">
                    <h2 className="card-title mt-28">Games On</h2>
                </div>
                
            </div>
            <div className="card w-fit  image-full">
                <figure><img src={a3} alt="Ad" /></figure>
                <div className="card-body">
                    <h2 className="card-title mt-28">Speed matter</h2>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;