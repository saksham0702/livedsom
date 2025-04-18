"use client";

import { RxCross1 } from "react-icons/rx";
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from "react";

function ReportPop({ isOpen, isClose, title}) {
  const options = [
    "Illegal/Fraudulent",
    "Spam Ad",
    "Duplicate Ad",
    "Ad is in the wrong category",
    "Against Posting Rules",
    "Adult Content",
    "Other than above"
  ];
 


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
        <div className="fixed z-[999999999] bg-black/50 w-full h-screen top-0 left-0 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-sm rounded-md p-3 relative">

                         <div className="w-full flex justify-between   mb-1    ">
                           <div className=" flex  ">
                             <span className=" font-semibold text-lg  ">
                               Report
                              
                             </span>
                           </div>
                           <RxCross1
                             onClick={isClose}
                             className="cursor-pointer border-2 rounded-full text-lg  text-red-500 border-red-500 hover:text-red-500"
                           />
                         </div>
              
                         <h1 className="text-start text-[16px] font-bold mb-2">{title}</h1>

              
            

            {/* Radio Options */}
            <div className="flex flex-col gap-2">
              {options.map((option, index) => (
                <label key={index} className="flex items-center gap-2 text-sm">
                  <input type="radio" name="reportReason" className="accent-red-600" />
                  {option}
                </label>
              ))}
            </div>

            {/* CAPTCHA placeholder */}
            <div className="flex items-center justify-center mt-3 mb-4">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptchaChange}
              ref={recaptchaRef}
            />
          </div>

            {/* Report Button */}
            <div className="mt-4">
              <button className="w-full bg-red-600/80 text-white py-1 font-medium text-lg rounded">Report</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReportPop;
