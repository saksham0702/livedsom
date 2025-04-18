"use client"
import { RxCross1 } from "react-icons/rx";
import { FaShare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../Button";

function AddressPopUp({ isOpen, isClose, title }) {
  return (
    <>
      {isOpen && (
        <div className="fixed z-[999999999] bg-black/50 w-full h-[100vh] top-0 left-0 m-0">
          <div className=" flex items-center h-full w-full justify-center mt-10 ">
            <div className="bg-white flex justify-center items-center flex-col py-2 px-3 rounded-md max-w-md w-[90%]">
              <div className="w-full flex justify-between px-1 items-center mb-1">
                <h1 className="font-bold ">
                  {title}
                </h1>
                <RxCross1
                  onClick={isClose}
                  className="cursor-pointer text-xl hover:text-red-500"
                />
              </div>

              <div className="capitalize font-semibold w-full text-center mb-1">
                full address
              </div>
              <div className="flex  gap-2 mb-4">
                <FaLocationDot className="text-red-500 text-2xl" />
                <p className="text-base">
                  29 Tagore Villa, Above Bank of Baroda, Connaught Place,
                  Dehradun -Uttarakhand
                </p>
              </div>

              <div className="">
                <div className="bg-orange-600 w-fit text-center  text-white px-4 py-2 text-sm font-semibold rounded-sm ">
                  <Button
                    className="px-2"
                    text="Get GMap Direction"
                    Icon={FaShare}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddressPopUp;
