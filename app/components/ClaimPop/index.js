"use client";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { RxCrossCircled } from "react-icons/rx";

const ClaimPop = ({ isOpen, isClose, title }) => {
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
            <div className="bg-white flex justify-center space-y-5 items-center flex-col px-2 py-3 overflow-hidden rounded-md max-w-[390px] w-[90%]">
              <div className="w-full flex justify-between  mb-1  px-1 text-xl  ">
                <div className=" flex  ">
                  <span className=" font-semibold text-lg  ">
                    Claim Ownership
                  </span>
                </div>

                <RxCrossCircled
                  onClick={isClose}
                  className="cursor-pointer  rounded-full text-2xl  text-red-500  hover:text-red-500"
                />
              </div>
              <h1 className="text-start text-[16px] font-bold mb-2">{title}</h1>

              {/* form section */}

              <div className="gap-y-3 w-full flex flex-col">
                <label className="px-1 text-[14px] " htmlFor="name">
                  Full Name *
                  <input
                    type="text"
                    placeholder="Full Name.."
                    className="w-full px-4 py-1 text-[16px] mb-2 border border-gray-300 bg-white text-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                    required
                  />
                </label>

                <label className="px-1 text-[14px] " htmlFor="name">
                  Email *
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-1 text-[16px]  border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                    required
                  />
                </label>
                <label className="px-1 text-[14px]" htmlFor="number">
                  Mobile Number*
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-1 text-[16px] border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                    required
                  />
                </label>
                <label className="px-1 text-[14px]" htmlFor="reason">
                  Reason for ownership claim*
                  <textarea
                    placeholder="Type here...."
                    rows={2}
                    className="w-full px-4 py-1 text-[16px] resize-none h-20 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 "
                    required
                  />
                </label>
                <label className="flex pl-1 gap-1 text-[14px]">
                  <input type="checkbox" />
                  By Claiming I agree to terms & conditions.
                </label>

                <div className="flex items-center justify-center  ">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleCaptchaChange}
                    ref={recaptchaRef}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-800/80 text-white py-2 px-2 rounded-md  transition-colors duration-200 text-[16px] font-medium"
                >
                  Claim Business
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClaimPop;
