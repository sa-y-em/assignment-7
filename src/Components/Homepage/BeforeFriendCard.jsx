import React from 'react';


const BeforeFriendCard = () => {
    return (
        <div className='grid grid-cols-4 gap-3 mb-5'>
            <div className='text-gray-700 text-center p-6 border border-gray-200 shadow-xl rounded-2xl'>
                <h2 className='font-black text-2xl'>8</h2>
            <p className='font-medium'>Total Friends</p>
            </div>
            <div className='text-gray-700 text-center p-6 border border-gray-200 shadow-xl rounded-2xl'>
                <h2 className='font-black text-2xl'>3</h2>
            <p className='font-medium'>On Track</p>
            </div>
            <div className='text-gray-700 text-center p-6 border border-gray-200 shadow-xl rounded-2xl'>
                <h2 className='font-black text-2xl'>6</h2>
            <p className='font-medium'>Need Attention</p>
            </div>
            <div className='text-gray-700 text-center p-6 border border-gray-200 shadow-xl rounded-2xl'>
                <h2 className='font-black text-2xl'>12</h2>
            <p className='font-medium'>Interactions This Month</p>
            </div>
            
        </div>
    );
};

export default BeforeFriendCard;