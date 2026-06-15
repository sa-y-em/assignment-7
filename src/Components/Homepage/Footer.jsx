import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-green-900 text-center items-center pt-10 pb-8'>
            <h2 className='font-bold text-5xl text-white'>KeenKeeper</h2>
            <p className='font-normal text-gray-300 m-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <h4 className='font-normal text-gray-200 mb-4 text-2xl'>Social Links</h4>
            <ul className='flex justify-center gap-2.5 items-center w-full mx-auto mb-10'>
                <li className='rounded-full bg-white p-4'><FaInstagram /></li>
                <li className='rounded-full bg-white p-4'><FaFacebookSquare /></li>
                <li className='rounded-full bg-white p-4'><FaSquareXTwitter /></li>
            </ul>
            <hr  className='border-gray-500 mb-3'/>
            <div className='text-gray-300 flex justify-around'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex gap-4'>
                    <ul>Privacy Policy</ul>
                    <ul>Terms of Service</ul>
                    <ul>Cookies</ul>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;