"use client";

import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="bg-white flex items-center justify-center px-4 py-30">
      <div className="text-center max-w-xl">
        {/* 404 raqami */}
        <h1 className="text-[120px] md:text-[180px] font-bold text-black leading-none mb-4">
          404
        </h1>
        
        {/* Xabar */}
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase tracking-tight">
          Page Not Found
        </h2>
        
        <p className="text-gray-500 text-sm md:text-base mb-8 px-4">
          Sorry, the page you are looking for doesnt exist or has been moved.
        </p>
        
        {/* Tugma */}
        <Link 
          href="/"
          className="inline-block px-10 py-3.5 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;