import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';
import Banner from '../Banner';
import BeforeFriendCard from './BeforeFriendCard';
import Friends from '../../Friends';

const HomePage = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet>
            <Banner></Banner>
            
           </Outlet>
        </div>
    );
};

export default HomePage;