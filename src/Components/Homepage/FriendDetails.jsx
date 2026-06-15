import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import allFriends from "../../RandomData.json"
import { MdDelete, MdOutlineTextsms } from 'react-icons/md';
import { FaArchive } from 'react-icons/fa';
import { HiMiniBellSnooze } from 'react-icons/hi2';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { context } from './Context';

const FriendDetails = () => {


    const {callFunction , textFunction ,videoFunction} = useContext(context)

    

    const statusStyles = {
  "overdue": "bg-red-400 text-white",
  "almost due": "bg-orange-400 text-white",
  "on-track": "bg-green-400 text-white",
};
    
    const params = useParams();
    const desireFriend = allFriends.find(friend => friend.id == params.id);
    // console.log(desireFriend);

    // console.log(params);
    return (
        <div className='flex m-3 mx-auto gap-2'>

       
        <div className='shadow-sm w-1/4 m-3'>
           <div className="">
                
                    <div to={`/friends/${desireFriend.id}`} key={desireFriend.id} className="flex flex-col items-center text-center bg-white border border-gray-300 rounded-2xl p-5 shadow-sm hover:cursor-pointer">
                        
                        <img
                            src={desireFriend.picture}
                            alt={desireFriend.name}
                            className="w-20 h-20 rounded-full object-cover mb-3"
                        />
                        
                        



                        <h3 className="font-bold text-gray-900">{desireFriend.name}</h3>
                        {/* <p className="text-sm text-gray-400 mb-2">{desireFriend.days_since_contact}d ago</p> */}

                        <span className={`text-xs font-semibold px-3 mb-1 py-1 rounded-full ${statusStyles[desireFriend.status]}`}>
                            {desireFriend.status}
                        </span>

                       
                        <div className="flex flex-wrap justify-center gap-1 mb-2">
                            {desireFriend.tags.map((tag, i) => (
                                <span key={i} className="bg-green-200 text-black text-sm font-semibold px-2 py-0.5 rounded-full ">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className='text-gray-500 m-1'>
                            <p>"{desireFriend.bio}"</p>
                        <p>Preferred: email</p>
                        </div>
                        

                    
                        {/* <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[desireFriend.status]}`}>
                            {desireFriend.status}
                        </span> */}

                    

                    </div>
                    
                
            </div>
                    <div className='shadow-sm text-center items-center font-bold p-2 m-2  flex justify-center'><HiMiniBellSnooze />Snooze 2 Weeks </div>
                    <div className='shadow-sm text-center items-center font-bold p-2 m-2  flex justify-center'><FaArchive />
Archive</div>
                    <div className='shadow-sm text-center items-center font-bold p-2 m-2 text-red-700 flex justify-center'><MdDelete />Delete</div>

        </div>
        <div className='w-3/4'>
            <div className='top shadow-sm flex gap-3 justify-around font-bold text-gray-600 text-2xl m-3'>
                <div className='p-4 items-center text-center shadow-sm'>
                    <p>{desireFriend.days_since_contact}</p>
                    <p>Days Since Contact</p>
                </div>
                <div className='p-4 items-center text-center shadow-sm'>
                    <p>{desireFriend.goal}</p>
                    <p>Goal (Days)</p>
                </div>
                <div className='p-4 items-center text-center shadow-sm'>
                    <p>{desireFriend.next_due_date}</p>
                    <p>Next Due</p>
                </div>
                
            </div>
            <div className='middle m-3 flex items-center justify-between p-3 shadow-sm'>
                <div>
                    <p className='font-bold text-gray-700'>Relationship Goal</p>
                    <p className='font-medium text-gray-500'>Connect every <span>{desireFriend.goal} Days</span></p>
                </div>
                <div>
                    <button className='btn'>Edit</button>
                </div>
            </div>
            <div>
                <p className='m-2'>Quick Check-In </p>
                <div className='flex flex-3 justify-between p-3 gap-4 text-2xl '>
                    <button className='p-12 w-full bg-gray-400 rounded text-center items-center flex flex-col  justify-center hover:cursor-pointer' onClick={()=>callFunction(desireFriend)}> <FiPhoneCall />call</button>
                    <button className='p-12 w-full bg-gray-400 rounded text-center items-center flex flex-col justify-center' onClick={()=>textFunction(desireFriend)}> <MdOutlineTextsms />text</button>
                    <button className='p-12 w-full bg-gray-400 rounded text-center items-center flex flex-col justify-center ' onClick={()=>videoFunction(desireFriend)}> <IoVideocamOutline />video</button>
                </div>
            </div>
        </div>
         </div>
    );
};

export default FriendDetails;