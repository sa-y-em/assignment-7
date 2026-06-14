import React from 'react';
import { useNavigate } from 'react-router';  

const ErrorPage = () => {
    const navigate = useNavigate();  

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center gap-3 bg-violet-50">
            <span className="text-5xl">😵</span>
            <h1 className="text-8xl font-extrabold text-violet-600 leading-none">404</h1>
            <p className="text-xl font-bold text-gray-800">Page not found</p>
            <p className="text-sm text-gray-500">This page doesn't exist or was moved.</p>
            <button
                onClick={() => navigate('/')}  
                className="mt-2 bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm px-6 py-2.5 rounded-lg">
                ← Back to Home
            </button>
        </div>
    );
};

export default ErrorPage;