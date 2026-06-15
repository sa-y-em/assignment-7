import React from 'react';
import AllFriendsData from "./RandomData.json";
import { NavLink } from 'react-router';

const statusStyles = {
  "overdue": "bg-red-400 text-white",
  "almost due": "bg-orange-400 text-white",
  "on-track": "bg-green-400 text-white",
};

const Friends = () => {
    return (
        <NavLink to="/friends/:id">
            
            <div className="grid grid-cols-4 gap-4">
                {AllFriendsData.map((friend) => (
                    <div key={friend.id} className="flex flex-col items-center text-center bg-white border border-gray-300 rounded-2xl p-5 shadow-sm hover:cursor-pointer">
                        
                        <img
                            src={friend.picture}
                            alt={friend.name}
                            className="w-20 h-20 rounded-full object-cover mb-3"
                        />

                        <h3 className="font-bold text-gray-900">{friend.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">{friend.days_since_contact}d ago</p>

                       
                        <div className="flex flex-wrap justify-center gap-1 mb-2">
                            {friend.tags.map((tag, i) => (
                                <span key={i} className="bg-green-200 text-black text-sm font-semibold px-2 py-0.5 rounded-full ">
                                    {tag}
                                </span>
                            ))}
                        </div>

                    
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[friend.status]}`}>
                            {friend.status}
                        </span>

                    </div>
                ))}
            </div>
        </NavLink>
    );
};

export default Friends;