import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const FedbackCard = ({ fedback }) => {
 const { userName, user_photoURL, review: testimonial } = fedback;


  return (
    <div className="max-w-md p-6 bg-purple-100 rounded-2xl shadow-lg">
      {/* Quote icon */}
      <FaQuoteLeft className="text-blue-800 text-3xl mb-4" />

      {/* Divider */}
      <div className="border-t border-dashed border-blue-400 my-6"></div>

      {/* Author section */}
      <div className="flex flex-col items-center gap-4">
        {/* Avatar */}
        <div className="flex items-center justify-center text-white font-semibold">
          <img
            className="w-5 md:w-15 h-5 md:h-15 rounded-full"
            src={user_photoURL}
            alt=""
          />
        </div>

        {/* Name & role */}
        <div>
          <h4 className="font-semibold text-blue-900 text-center underline">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
        {/* Quote text */}
        <p className="mb-4 text-center text-pink-700">{testimonial}</p>
      </div>
    </div>
  );
};

export default FedbackCard;