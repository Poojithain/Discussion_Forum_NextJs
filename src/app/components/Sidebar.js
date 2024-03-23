'use client'
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white focus:outline-none z-10 ${isOpen ? 'hidden' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className={`bg-gray-900 w-64 flex-none shadow-lg transition-all duration-300 fixed top-0 left-0 h-full ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Cross Icon */}
        <button onClick={toggleSidebar} className="absolute top-0 right-0 mt-4 mr-4 text-white focus:outline-none z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Sidebar content */}
        <div className="p-4">
          <h1 className="text-white text-lg font-bold">Discussion Form</h1>
          <h1 className="text-white text-lg font-bold">Market Stories</h1>
          {/* Add other sidebar content here */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
