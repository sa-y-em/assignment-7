import React from 'react';
import BeforeFriendCard from './Homepage/BeforeFriendCard';
import Friends from '../Friends';
import YourFriends from './Homepage/YourFriends';

const Banner = () => {
    return (
        <div className='p-6 mx-auto'>
             <div className='text-center'>
            <h2 className='font-bold text-4xl mt-4'>Friends to keep close in your life</h2>
            <p className='font-semibold mt-3 text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
<button className='bg-green-700 m-3 text-white p-2 rounded-lg'> + Add a Friend</button>


        </div>

        <BeforeFriendCard></BeforeFriendCard>
            <YourFriends></YourFriends>
            
        </div>
       
    );
};

export default Banner;