
import React from 'react';
import DiscussionCardVert from '../components/DiscussionCardVert';

const DiscussionForumVert = () => {
  // Hardcoded data
  const discussions = [
    { id: 1, name: 'John Doe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. et malesuada fames ac turpis egestas..' },
    { id: 2, name: 'Jane Smith', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    // Add more discussions as neede
  ];

  return (
    <div className="flex flex-col container mx-auto py-8 flex justify-end items-end ">
      <h1 className="text-3xl font-bold mb-4">Vertical</h1>
      {discussions.map((discussion) => (
        <DiscussionCardVert key={discussion.id} name={discussion.name} description={discussion.description}  />
      ))}
    </div>
  );
};

export default DiscussionForumVert;
