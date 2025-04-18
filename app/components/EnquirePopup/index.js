'use client'
import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { RxCross1 } from "react-icons/rx";

const EnquirePop = ({ isOpen, isClose, title }) => {
     const [isVerified, setIsVerified] = useState(false);
      const recaptchaRef = useRef(null);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!isVerified) {
          alert("Please tick the 'I'm not a robot' checkbox.");
          return;
        }
    
        
    
      };
    
      const handleCaptchaChange = (value) => {
        setIsVerified(!!value); 
      };
  return (
    <>
      {isOpen && (
        <div className="fixed z-[999999999] bg-black/50 w-full h-[100vh] top-0 left-0 m-0">
          <div className=" flex items-center h-full w-full justify-center  ">
            <div className="bg-white flex justify-center items-center flex-col px-2 py-3 overflow-hidden rounded-md max-w-[390px] w-[90%]">
              <div className="w-full flex justify-between px-1  mb-1 pb-3   ">
                <div className=" flex  ">
                  <span className=" font-semibold  ">
                    Enquire:
                    <span className="font-bold pl-1 text-orange-400">{title}</span>
                  </span>
                </div>
                <RxCross1
                  onClick={isClose}
                  className="cursor-pointer  text-gray-500 text-2xl hover:text-red-500"
                />
              </div>
              <hr className='h-2 w-full px-0 text-gray-300' />

              {/* form section */}

              <form className="space-y-3 relative " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-1 border border-gray-300 bg-white text-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-1 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full px-4 py-1 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
            required
          />
          <textarea
            placeholder="Type your message..."
            rows={2}
            className="w-full px-4 py-1 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 resize-none"
            required
          />

          <div className="flex items-center justify-center  mb-4">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptchaChange}
              ref={recaptchaRef}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-2 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Send Enquiry
          </button>
        </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquirePop;
