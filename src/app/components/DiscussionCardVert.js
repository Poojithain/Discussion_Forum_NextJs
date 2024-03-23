// components/DiscussionCard.js
import React from 'react';

const DiscussionCardVert = ({ name, description, isHorizontal }) => {
  return (
    <div className={`border rounded-lg shadow-md mb-4 ${isHorizontal ? 'flex' : 'flex-col'}`} style={{ maxWidth: 'calc(100% - 75rem)' }}>
      {isHorizontal ? (
        <>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            {/* Profile Image */}
            <img
              src="/Profile.webp" // Replace with the URL of the profile image
              alt="Profile Image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-4 flex flex-wrap items-center flex-grow">
            {/* Name */}
            <p className="font-bold mr-2 mb-1">{name}</p> {/* Apply inline style to remove underline */}
           
           
            {/* Description */}
            <p className="text-gray-600 text-sm mt-1">{description}</p> {/* Apply inline style to remove underline */}
          </div>
        </>
      ) : (
        <>
          <div className="w-32 h-32 rounded-t-lg overflow-hidden">
            {/* Sample Image */}
            <img
              src="/SampleImage.jpg" // Replace with the URL of the sample image
              alt="Sample Image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            {/* Name */}
            <p className="font-bold mb-2">{name}</p>
           
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default DiscussionCardVert;
