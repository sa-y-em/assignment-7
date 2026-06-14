import React from 'react';
import { GoGraph } from 'react-icons/go';
import { IoTimeOutline } from 'react-icons/io5';
import { MdHome } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-between w-full bg-gray-200  mx-auto   font-semibold ">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl font-bold">Keen<span className='text-[#244D3F]'>Keeper</span> </a>
  </div>
  
  <div className="navbar-end space-x-4 flex">
    <NavLink to='/' className="btn flex items-center"><MdHome />Home</NavLink >
    <NavLink to="/time" className="btn flex items-center"><IoTimeOutline />Timeline</NavLink >
    <NavLink to="/stats" className="btn flex items-center"><GoGraph />Stats</NavLink >
  </div>
</div>
        </div>
    );
};

export default Navbar;