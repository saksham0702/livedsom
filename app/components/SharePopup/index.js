import React from "react";
import { RxCross1 } from "react-icons/rx";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const SharePopup = ({ isClose, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-[999999999] bg-black/50 w-full h-[100vh] top-0 left-0 m-0">
          <div className=" flex items-center h-full w-full justify-center mt-10 ">
            <div className="bg-white relative bottom-7 flex justify-center items-center flex-col py-2 px-3 rounded-md max-w-md w-[90%]">
              <div className="  mr-2 absolute  right-0 top-1 cursor-pointer   border-2 rounded-full border-blue-700">
                <RxCross1
                  onClick={isClose}
                  className=" text-sm text-blue-700 "
                />
              </div>

              <h1 className=" mt-4 text-xl font-bold">Share on</h1>

              {/* icons area */}
              <div className="flex gap-2 mt-2 mb-1">
                <div className="bg-green-500 text-white p-2  text-xl">
                  <FaWhatsapp />
                </div>
                <div className="bg-blue-400 text-white p-2  text-xl">
                  <FaTelegramPlane />
                </div>
                <div className="bg-blue-600 text-white p-2 text-xl">
                  <FaFacebookF />
                </div>
                <div className="bg-blue-700 text-white p-2  text-xl">
                  <FaLinkedinIn />
                </div>
                <div className="bg-black text-white p-2 text-xl">
                  <FaXTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SharePopup;
