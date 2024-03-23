import React from 'react';
import DiscussionCardHor from '../components/DiscussionCardHor';

const DiscussionForumHor = () => {
  // Hardcoded data
  const discussions = [
    { id: 1, name: 'John Doe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. et malesuada fames ac turpis egestas..' },
    { id: 2, name: 'Jane Smith', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    // Add more discussions as needed
  ];

  return (
    <div className="container mx-auto py-8 mb-10 flex justify-center">
      <div className="text-center"> {/* Center the content horizontally */}
        <h1 className="text-3xl font-bold mb-8">Horizontal</h1>
        <div className="flex flex-col items-center"> {/* Center the discussion cards */}
          {discussions.map((discussion) => (
            <DiscussionCardHor key={discussion.id} name={discussion.name} description={discussion.description} sector="Sector1" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionForumHor;
