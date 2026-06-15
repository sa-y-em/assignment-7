import React, { useContext } from 'react';
import AllContext, { context } from './Homepage/Context';
import { FaHandshake, FaVideo } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

const TimeLine = () => {
    const {calls,videos,texts} = useContext(context);
    return (
        <div className='p-5 mx-auto'>
            <p className='text-3xl font-bold'> Timeline </p> 
           
            {calls.map((call,i)=>
               <div key={i} className='flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 mb-3'>
                    <div className='bg-yellow-100 p-3 rounded-full'>
                        <FaHandshake className='text-yellow-500 text-2xl'/>
                    </div>
                    <div>
                        <p className='font-bold'>Meetup <span className='font-normal text-gray-500'>with {call.name}</span></p>
                       <p className='text-sm text-gray-400'>{new Date().toLocaleDateString()}</p>
                    </div>
                </div>)}
            {videos.map((call , i)=>
               <div key={i} className='flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 mb-3'>
                    <div className='bg-yellow-100 p-3 rounded-full'>
                        <FaVideo className='text-black-500 text-2xl'/> 
                    </div>
                    <div>
                        <p className='font-bold'>video <span className='font-normal text-gray-500'>with {call.name}</span></p>
                       <p className='text-sm text-gray-400'>{new Date().toLocaleDateString()}</p>
                    </div>
                </div>)}
            {texts.map((call ,i)=>
               <div key={i} className='flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 mb-3'>
                    <div className='bg-yellow-100 p-3 rounded-full'>
                        <MdMessage className='text-black-500 text-2xl'/>
                        
                    </div>
                    <div>
                        <p className='font-bold'>Text <span className='font-normal text-gray-500'>with {call.name}</span></p>
                       <p className='text-sm text-gray-400'>{new Date().toLocaleDateString()}</p>
                    </div>
                </div>)}

            
        </div>
    );
};

export default TimeLine;