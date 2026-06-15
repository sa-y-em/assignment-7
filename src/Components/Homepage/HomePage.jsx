import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';
import Banner from '../Banner';
import BeforeFriendCard from './BeforeFriendCard';
import Friends from '../../Friends';
import Footer from './Footer';
import AllContext from './Context';
import { toast } from 'react-toastify';

const HomePage = () => {
    return (
        <div>
           
           <Navbar></Navbar>
           <Outlet>
            <Banner></Banner>
            
           </Outlet>
           <Footer></Footer>
           
          
        </div>
    );
};

export default HomePage;