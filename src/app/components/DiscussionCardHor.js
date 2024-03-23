import React from 'react';

const DiscussionCardHor = ({ name, description, sector }) => {
  return (
    <div className="relative flex flex-col items-start border rounded-lg shadow-md mb-4" style={{ maxWidth: 'calc(100% - 5rem)' }}>
      <div className="flex items-center w-full border-b p-2">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          {/* Profile Image */}
          <img
            src="" // Replace with the URL of the profile image
            alt="Profile Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col flex-grow">
          {/* Name */}
          <p className="font-bold mb-1" style={{ textDecoration: 'none !important' }}>{name}</p>
          {/* Sector Tag */}
          {sector && (
            <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md mr-2">
              {sector}
            </span>
          )}
          {/* Description */}
          <p className="text-gray-600 text-sm mt-1" style={{ textDecoration: 'none !important' }}>{description}</p>
        </div>
      </div>
      {/* Action buttons */}
      <div className="flex justify-between w-full p-2">
        <button className="flex items-center space-x-1">
          {/* Like button */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18l-1.077-1.428C4.077 11.484 1 8.176 1 5.05 1 3.02 2.257 1 4.143 1 5.496 1 8.067 2.56 10 5.187 11.933 2.56 14.504 1 15.857 1 17.743 1 19 3.02 19 5.05c0 3.126-3.077 6.434-8.923 11.522L10 18z" clipRule="evenodd" />
          </svg>
          <span className="text-xs">Likes 2</span>
        </button>
        <button className="flex items-center space-x-1">
          {/* Comment button */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 3.5C2 2.67157 2.67157 2 3.5 2h13c.8284 0 1.5.67157 1.5 1.5v8c0 .8284-.6716 1.5-1.5 1.5h-2.3431l-2.353 2.353c-.3595.3594-.8544.5861-1.4039.6323l-.1461.008h-.5c-.4142 0-.7887-.2549-.9412-.6446l-.0458-.1211L8 12.9375l-.0626.0384C7.4513 13.1677 7 13.6235 7 14v1c0 .2761.2239.5.5.5h5c.2761 0 .5-.2239.5-.5v-1c0-.3765-.4513-.8323-.9399-.9246L12 12.9375l-.144-.0565-.0768-.0304-.1222-.0453c-.2885-.0987-.593-.1583-.9105-.1677L10.5 12h-7c-.82843 0-1.5-.67157-1.5-1.5v-8zM16 6.0858V4.5c0-.2761-.2239-.5-.5-.5h-13c-.2761 0-.5.2239-.5.5v8c0 .2761.2239.5.5.5h.7188L5 15.7929V13.5c0-.8284.6716-1.5 1.5-1.5h5c.8284 0 1.5.6716 1.5 1.5v2.2929l3.7813-3.7812H16c.2761 0 .5-.2239.5-.5v-8c0-.2761-.2239-.5-.5-.5z" clipRule="evenodd" />
          </svg>
          <span className="text-xs">Comments 2</span>
        </button>
        <button className="flex items-center space-x-1">
          {/* Share button */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 3a1 1 0 011-1h6a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V7H8v8h5a1 1 0 110 2H7a1 1 0 01-1-1V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          <span className="text-xs">Shares</span>
        </button>
      </div>
    </div>
  );
};

export default DiscussionCardHor;
