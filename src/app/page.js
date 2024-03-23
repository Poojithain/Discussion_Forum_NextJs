// pages/index.js
import React from 'react';
import DiscussionForumVert from './Pages/DiscussionForumVert';
import DiscussionForumHor from './pages/DiscussionForumHor';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div>
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      </div>
     <div>
       <div>
        {/* Vertical Discussion Forum */}
        <DiscussionForumVert />
        </div>
        <div>
        {/* Horizontal Discussion Forum */}
        <DiscussionForumHor />
        </div>
        </div>
    
   
    </div>
  );
}
