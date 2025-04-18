'use client'
import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Form = () => {
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
    <div className="w-[348px] h-[474.984px] hidden md:flex items-center justify-center relative right-3 top-4 pt-10 bg-[#f0f9f9]">
      <div className="px-4">
        <div className="text-[#212529] relative bottom-5 leading-none ">
          <p className='font-semibold'> Get More Information From </p>
          <h2 className='text-lg font-semibold'>
            DSOM - Dehradun School of Online Marketing
          </h2>
        </div>

        <hr className='my-2 mt-6 text-gray-300 relative bottom-9' />

        <form className="space-y-3 relative bottom-5" onSubmit={handleSubmit}>
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

          <div className="flex items-center justify-start mb-4">
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
  );
};

export default Form;
