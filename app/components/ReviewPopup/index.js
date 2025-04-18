import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";


const ReviewPopup = ({ isClose, isOpen, title }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  }

  return (
    <>
      {isOpen && (
        <div className="fixed z-[999999999] bg-black/50 w-full h-full top-0 left-0 flex items-center justify-center">
          
          <div className="relative w-[390px] sm:w-[370px] bg-white rounded-lg shadow-lg p-2">
            
            {/* Close icon */}
            <button onClick={isClose} className="absolute top-3 right-3 text-xl text-gray-500 hover:text-red-500">
              <RxCross1 />
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-4 ">
              Review: {title}
            </h2>

            {/* Star rating */}
            <div className="flex justify-around gap-1  mb-4">
              {[...Array(5)].map((_, index) => (
                <FaRegStar
                  key={index}
                  className={` hover:-rotate-40 hover:scale-120 transition-transform duration-500 cursor-pointer text-5xl ${index < rating ? 'text-yellow-400' : 'text-black'}`}
                  onClick={() => handleRating(index)}
                />
              ))}
            </div>

            {/* Input fields */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 text-sm focus:outline-blue-500"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 text-sm focus:outline-blue-500"
            />
            <textarea
              rows="3"
              placeholder="Type here"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm resize-none focus:outline-blue-500"
            />

            {/* Submit button */}
            <button
              className="w-full bg-[#007bff] hover:bg-blue-700 text-white font-semibold py-2 rounded-md text-sm flex justify-center items-center gap-2"
            >
              <FaStar className="text-white rotating text-xl" />
              Rate Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewPopup;
